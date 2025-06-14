import { Eye, EyeOff } from "lucide-react";
import LoginLogo from "/ParkeyeLogoLogin.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const validateInputs = () => {
    if (email.length === 0) {
      setEmailError("Please enter your email");
    }

    if (password.length === 0) {
      setPasswordError("Please enter your password");
    }

    if (email && password) {
      navigate("/dashboard");
    }
  };

  const handleToggle = () => {
    setIsVisible((visible) => !visible);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg mx-4 w-full max-w-[400px] h-[500px]">
        <div className="flex flex-col items-center p-8">
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="mb-3 w-[142px] h-[72px]"
          />

          <h2 className="font-semibold text-2xl mt-[18px] mb-2">
            Welcome back!
          </h2>
          <h5 className="font-normal text-[#535862] text-base mb-6">
            Please enter your details.
          </h5>

          <div className="flex flex-col items-center w-full max-w-[350px]">
            <div className="w-full mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                id="login_email"
                height={44}
                className="pt-2 pb-2 pr-3 pl-3 text-[#000000e0] border-[#d9d9d9] border-[1px] rounded-lg w-full outline-[#a481e6] hover:outline-[#7f56d9] transition-all duration-200 delay-0 hover:outline-1"
              />
              <p className="text-red-500 text-sm ml-1">
                {emailError && " Please enter your email"}
              </p>
            </div>
            <div className="w-full relative mb-3">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                id="login_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                height={44}
                className="pt-2 pb-2 pr-3 pl-3 text-[#000000e0] border-[#d9d9d9] border-[1px] rounded-lg w-full outline-[#a481e6] hover:outline-[#7f56d9] transition-all duration-200 delay-0 hover:outline-1"
                aria-label="password"
              />
              <p className="text-red-500 text-sm ml-1">
                {passwordError && "Please enter your password"}
              </p>
              <button
                type="button"
                onClick={handleToggle}
                aria-label={isVisible ? "Hide passsword" : "Show passsword"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff className="absolute inset-y-0 end-3 top-3 text-black/45 hover:text-black/88 cursor-pointer transition-all duration-200 delay-0 size-4" />
                ) : (
                  <Eye className="absolute inset-y-0 end-3 top-3 text-black/45 hover:text-black/88 cursor-pointer transition-all duration-200 delay-0 size-4" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between w-full text-sm mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="cursor-pointer size-4 accent-[#7f56d9]"
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link to={"/forgot-password"}>
                <p className="text-[#6941c6]">Forgot Password?</p>
              </Link>
            </div>
            <button
              onClick={validateInputs}
              className="bg-[#7f56d9] hover:bg-[#a481e6] transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-0 text-white text-base h-10 pl-10 pr-10 w-full rounded-lg cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
