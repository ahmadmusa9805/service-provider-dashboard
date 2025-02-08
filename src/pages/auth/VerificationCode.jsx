import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerificationCode() {
  const [code, setCode] = useState(new Array(5).fill(""));

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyCode = async () => {
    navigate(`/new-password`);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex  justify-center items-center">
          <div className="w-full lg:w-1/2 bg-white p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
            <h2 className="text-[#0D0D0D] text-2xl md:text-3xl font-bold text-center mb-5">
              Verification code
            </h2>
            <p className="text-[#0D0D0D] text-center mb-8">
              We sent a reset link to contact@dscode...com enter 5 digit code
              that is mentioned in the email
            </p>

            <form className="space-y-6">
              <div className="flex justify-center gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="shadow-xs w-20 h-20 text-2xl text-center border border-[#00C0B5] text-[#00C0B5] rounded-md focus:outline-none"
                  />
                ))}
              </div>

              <button
                onClick={handleVerifyCode}
                className="w-full bg-[#00C0B5] text-white font-semibold py-2 rounded-lg shadow-lg transition mt-10"
              >
                Verify Code
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationCode;
