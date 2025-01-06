import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import { LogOut, LogOutIcon, Moon, Settings, Sun } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ title = "", subtitle = "" }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    function setThemeColor() {
      const html = document.querySelector("html");
      html.setAttribute("class", "");
      html.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  return (
    <>
      {isLoading && <FetchingSpinner />}
      <header className="bg-secondary">
        <div className="flex justify-between items-center p-4">
          <div className="[&>*]:mb-0 ">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              className="h-[20px] w-[45px] bg-primary rounded-2xl border border-line  px-[2px] hover:border-accent transition-all duration-200"
              onClick={handleTheme}
            >
              <span
                className={`${
                  isDark ? "" : "translate-x-6"
                } size-[16px] rounded-full bg-secondary grid place-content-center transition-all duration-500`}
              >
                {isDark ? (
                  <Sun size={14} stroke="white" />
                ) : (
                  <Moon size={14} stroke="black" />
                )}
              </span>
            </button>
            <Link to="/developer/settings">
              <Settings />
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  localStorage.removeItem("jollibeetoken");
                  navigate("/developer/login");
                  setIsLoading(false);
                }, [3000]);
              }}
            >
              <LogOut />
            </button>
            <button className="size-[30px] rounded-full bg-accent grid place-content-center text-white">
              KC
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
