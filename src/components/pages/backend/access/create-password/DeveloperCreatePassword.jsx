import {
  devNavUrl,
  getUrlParam,
  imgPath,
} from "@/components/helpers/functions-general";
import {
  CheckCircle2,
  Eye,
  EyeClosed,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "Yup";
import { InputText } from "@/components/helpers/FormInputs,";
import { Form, Formik } from "formik";
import {
  setCreatePassSuccess,
  setError,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import useQueryData from "@/components/custom-hook/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { StoreContext } from "@/components/store/storeContext";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

const DeveloperCreatePassword = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowCornfirmPassword] = React.useState(false);
  const [showIconPassword, setshowIconPassword] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);
  const paramKey = getUrlParam().get("key");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, data: key } = useQueryData(
    `/v2/developer/key/${paramKey}`,
    "get",
    "developer/key"
  );

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v2/developer/password`, "post", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queries: ["developer"] });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        // if (store.isCreatePassSuccess) {
        //   dispatch(setCreatePassSuccess(false));
        //   navigate(
        //     `${devNavUrl}/create-password-succes?redirect=/developer/login`
        //   );
        // }
        setSuccess(true);
      }
    },
  });

  const [showIconConfrimPassword, setshowConfirmIconPassword] =
    React.useState(false);
  React.useState(false);

  React.useEffect(() => {
    function setThemeColor() {
      const html = document.querySelector("html");
      html.setAttribute("class", "");
      html.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  const handleChangePasswordInput = (e) => {
    if (e.target.value === "") {
      setshowIconPassword(false);
    } else {
      setshowIconPassword(true);
    }

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.[!@#$%^&`{;:',<.>/?}_-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(e.target.value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(e.target.value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(e.target.value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(e.target.value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(e.target.value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  const handleConfrimPasswordInput = (e) => {
    if (e.target.value === "") {
      setshowConfirmIconPassword(false);
    } else {
      setshowConfirmIconPassword(true);
    }
  };

  const initVal = {
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };
  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "At least 8 characters.")
      .matches("(?=.*[a-z])", "At least one lowercase letter.")
      .matches("(?=.*[A-Z])", "At least one uppercase letter.")
      .matches("(?=.[!@#$%^&`{;:',<.>/?}_-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  return (
    <main className="h-screen bg-primary center-all">
      <div className="login-main bg-secondary max-w-[320px] w-full p-4 border border-line rounded-md">
        <img
          src={`${imgPath}/jollibee-logo.webp`}
          alt=""
          className="w-[150px] mx-auto mb-2"
        />
        {success ? (
          <div className="success-message mt-5">
            <ShieldCheck size={50} stroke={"gray"} className="mx-auto" />
            <p className="my-5 text-center">
              Your password is ready ro use. Click the link to continue
            </p>
            <Link
              to="/developer/login"
              className="text-center block hover:text-accent"
            >
              Back to Login
            </Link>
          </div>
        ) : isLoading ? (
          <FetchingSpinner />
        ) : key?.count === 0 || paramKey === null || paramKey === "" ? (
          "Inavalid Page"
        ) : (
          <div>
            <h5 className="text-center">Set New Password</h5>

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input-wrap">
                      <InputText
                        label="New Password"
                        type={showPassword ? "text" : "password"}
                        className="!py-2"
                        name="new_password"
                        onChange={(e) => handleChangePasswordInput(e)}
                      />
                      {showIconPassword && (
                        <button
                          className="absolute bottom-2.5 right-2"
                          onClick={() => setShowPassword(!showPassword)}
                          type="button"
                        >
                          {showPassword ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )}
                        </button>
                      )}
                    </div>
                    <div className="input-wrap">
                      <InputText
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        className="!py-2"
                        name="confirm_password"
                        onChange={(e) => handleConfrimPasswordInput(e)}
                      />
                      {showIconConfrimPassword && (
                        <button
                          className="absolute bottom-2.5 right-2"
                          onClick={() =>
                            setShowCornfirmPassword(!showConfirmPassword)
                          }
                          type="button"
                        >
                          {showConfirmPassword ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )}
                        </button>
                      )}
                    </div>

                    <ul className="space-y-4">
                      <li
                        className={`flex gap-2 items-center text-sm opacity-50 ${
                          lengthValidated ? "!opacity-100" : ""
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          stroke={
                            lengthValidated ? "green" : "rgba(255,255,255,0.7)"
                          }
                        />
                        Atleast 8 Character
                      </li>
                      <li
                        className={`flex gap-2 items-center text-sm opacity-50 ${
                          upperValidated ? "!opacity-100" : ""
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          stroke={
                            upperValidated ? "green" : "rgba(255,255,255,0.7)"
                          }
                        />
                        Atleast 1 Uppercase
                      </li>
                      <li
                        className={`flex gap-2 items-center text-sm opacity-50 ${
                          lowerValidated ? "!opacity-100" : ""
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          stroke={
                            lowerValidated ? "green" : "rgba(255,255,255,0.7)"
                          }
                        />
                        Atleast 1 Lowercase
                      </li>
                      <li
                        className={`flex gap-2 items-center text-sm opacity-50 ${
                          numberValidated ? "!opacity-100" : ""
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          stroke={
                            numberValidated ? "green" : "rgba(255,255,255,0.7)"
                          }
                        />
                        Atleast 1 Number
                      </li>
                      <li
                        className={`flex gap-2 items-center text-sm opacity-50 ${
                          specialValidated ? "!opacity-100" : ""
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          stroke={
                            specialValidated ? "green" : "rgba(255,255,255,0.7)"
                          }
                        />
                        Atleast 1 Special Character
                      </li>
                    </ul>

                    <button
                      className="btn btn-accent w-full center-all mt-5"
                      // onClick={() => setSuccess(true)}
                      type="submit"
                      disabled={
                        mutation.isPending ||
                        props.values.new_password === "" ||
                        props.values.confirm_password === ""
                      }
                    >
                      {mutation.isPending ? <SpinnerButton /> : "Set Password"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </main>
  );
};

export default DeveloperCreatePassword;
