import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex  justify-center items-center">
          <div className="w-full lg:w-1/2 bg-white p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
            <h2 className="text-[#0D0D0D] text-2xl md:text-3xl font-bold text-center mb-5">
              Forgot password ?
            </h2>
            <p className="text-[#0D0D0D] text-center mb-8">
              Please enter your email to continue.
            </p>
            <form className="space-y-6">
              <div>
                <label className="text-xl text-[#0D0D0D] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="demo@example.com"
                  className="w-full p-2 border-2 border-[#F2F2F2] rounded-md outline-none text-md"
                  required
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/verification-code")}
                  type="button"
                  className="w-1/4 bg-[#00C0B5] text-white font-semibold py-2 rounded-lg shadow-lg cursor-pointer mt-5"
                >
                  Send Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
