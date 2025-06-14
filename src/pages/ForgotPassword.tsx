import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState("");

  const validateInput = () => {
    if (email.length === 0) {
      setIsEmpty("Please enter your email");
    }

    if (email) {
      alert("Password reset link send.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg mx-4 w-full max-w-[400px] h-[320px]">
        <div className="flex flex-col items-center p-8">
          <h2 className="font-semibold text-2xl mt-[18px] mb-2">
            Forgot password?
          </h2>
          <h5 className="font-normal text-black/45 text-sm mb-6">
            Enter your email to receive a reset link
          </h5>

          <div className="flex flex-col items-center w-full max-w-[350px]">
            <div className="flex flex-col w-full">
              <label className="text-sm ml-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                id="login_email"
                height={44}
                className="py-1 px-[11px] text-[#000000e0] border-[#d9d9d9] border-[1px] rounded-lg w-full outline-[#a481e6] hover:outline-[#7f56d9] transition-all duration-200 delay-0 hover:outline-1"
              />
              <p className="text-red-500 text-sm ml-1 mt-1 min-h-5">
                {isEmpty && "Please enter your email"}
              </p>
            </div>

            <button
              onClick={validateInput}
              className="bg-[#7f56d9] hover:bg-[#a481e6] transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-0 text-white text-base h-8 px-10 mt-1 w-full rounded-lg cursor-pointer"
            >
              Send reset link
            </button>

            <Link
              to={"/login"}
              className="flex items-center text-sm gap-1 mt-5 text-[#1677ff] hover:text-[#69b1ff] transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-0"
            >
              <BsArrowLeft size={16} />
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
