import { imgPath } from "@/components/helpers/functions-general";
import { CheckCircle2, Eye, EyeClosed, EyeOff, MailCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "Yup";
import { InputText } from "@/components/helpers/FormInputs,";
import { Form, Formik } from "formik";

const ForgotPassword = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const [success, setsuccess] = React.useState(false);

  React.useEffect(() => {
    function setThemeColor() {
      const html = document.querySelector("html");
      html.setAttribute("class", "");
      html.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  const initVal = {
    user_email: "",
  };
  const yupSchema = Yup.object({
    user_email: Yup.string().required("Required").email("Invalid email"),
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
            <MailCheck size={50} stroke={"gray"} className="mx-auto" />
            <p className="my-5 text-center">
              We have sent the instruction on how to reset your password
            </p>
            <Link
              to="/amdin/login"
              className="text-center block hover:text-accent"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <div>
            <h5 className="text-center">Forgot Password</h5>
            <p className="mb-5 text-center">
              Enter your registered email to reset your password
            </p>

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="input-wrap">
                      <InputText
                        label="Email"
                        type="email"
                        className="!py-2"
                        name="user_email"
                      />
                    </div>

                    <button
                      className="btn btn-accent w-full center-all mt-5"
                      onClick={() => setsuccess(true)}
                    >
                      Reset Password
                    </button>
                    <Link
                      to="/admin/login"
                      className="text-sm text-center block mt-5 hover:text-accent"
                    >
                      Go Back to Login
                    </Link>
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

export default ForgotPassword;
