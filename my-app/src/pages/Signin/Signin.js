// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import InputField from "../../components/inputField/inputField";
// import Button from "../../components/Button/button";
// import logo from "../../assets/images/logo.png";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [navigateToDashboard, setNavigateToDashboard] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/owner/signin",
//         formData
//       );

//       if (response.data.owner) {
//         setPopupMessage("Sign in successful!");
//         setNavigateToDashboard(true);
//       } else {
//         setPopupMessage("Authentication failed. Please try again.");
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response && error.response.data
//           ? error.response.data.message
//           : "An unexpected error occurred. Please try again.";
//       setPopupMessage(errorMessage);
//     }
//   };

//   const handlePopupClose = () => {
//     setPopupMessage(null);
//     if (navigateToDashboard) {
//       navigate("/dashboard", { state: { owner: formData } });
//     }
//   };

//   return (
//     <div className="bg-login-bg bg-cover bg-center bg-no-repeat min-h-screen w-full flex">
//       <div className="flex flex-col lg:flex-row w-full">
//         {/* Left Section */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-12">
//           {/* <img src={logo} alt="Logo" className="w-1/3 mb-4" /> */}
//           {/* <h1 className="text-3xl font-bold text-highlight">KARAYEDAR</h1> */}
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-12">
//           <div className="flex items-center gap-3 mb-6">
//             <img src={logo} alt="Logo" className="w-17 h-16" />
//             <h2 className="text-4xl text-highlight">Sign In</h2>
//           </div>
//           <form className="w-full max-w-sm" onSubmit={handleSignIn}>
//             <InputField
//               label="Email"
//               type="email"
//               id="email"
//               placeholder="Enter Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <InputField
//               label="Password"
//               type="password"
//               id="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <div className="mt-6">
//               <Button text="Login" />
//             </div>
//             <p className="mt-4 text-sm text-gray-600">
//               Don't have an account?{" "}
//               <span
//                 className="text-highlight cursor-pointer hover:underline"
//                 onClick={() => navigate("/signup")}
//               >
//                 Sign up
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>

//       {popupMessage && (
//         <Popup open={true} onClose={handlePopupClose} closeOnDocumentClick>
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <p className="text-primary mb-4">{popupMessage}</p>
//             <Button text="OK" onClick={handlePopupClose} />
//           </div>
//         </Popup>
//       )}
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Building2, ArrowRight, Eye, EyeOff } from "lucide-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [navigateToDashboard, setNavigateToDashboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/owner/signin",
        formData
      );

      if (response.data.owner) {
        setPopupMessage("Sign in successful!");
        setNavigateToDashboard(true);
      } else {
        setPopupMessage("Authentication failed. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : "An unexpected error occurred. Please try again.";
      setPopupMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopupClose = () => {
    setPopupMessage(null);
    if (navigateToDashboard) {
      navigate("/dashboard", { state: { owner: formData } });
    }
  };

  return (
    <div className="min-h-screen w-full flex relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#191343]/95 via-[#03254c]/90 to-[#317879]/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#2a9df4] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#317879] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left Section - Branding */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 text-white">
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#2a9df4] rounded-2xl shadow-2xl">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#2a9df4] to-[#9ECAE1] bg-clip-text text-transparent">
                KarayeDar
              </h1>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Welcome Back to Your Property Hub
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Manage your properties, tenants, and payments all in one powerful platform. 
              Your complete property management solution awaits.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-2 h-2 bg-[#2a9df4] rounded-full"></div>
                <span>Streamlined Property Management</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-2 h-2 bg-[#2a9df4] rounded-full"></div>
                <span>Real-time Tenant Communication</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-2 h-2 bg-[#2a9df4] rounded-full"></div>
                <span>Automated Rent Collection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Sign In Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#191343] mb-2">
                Sign In
              </h2>
              <p className="text-gray-600">Access your property dashboard</p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#191343] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2a9df4] focus:outline-none focus:ring-2 focus:ring-[#2a9df4]/20 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#191343] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2a9df4] focus:outline-none focus:ring-2 focus:ring-[#2a9df4]/20 transition-all text-gray-800 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#2a9df4] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 mt-6">
                Don't have an account?{" "}
                <span
                  className="text-[#2a9df4] font-semibold cursor-pointer hover:underline hover:text-[#1e8bd9] transition-colors"
                  onClick={() => navigate("/signup")}
                >
                  Sign up now
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupMessage && (
        <Popup open={true} onClose={handlePopupClose} closeOnDocumentClick modal>
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              navigateToDashboard ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {navigateToDashboard ? (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              navigateToDashboard ? 'text-green-600' : 'text-red-600'
            }`}>
              {navigateToDashboard ? 'Success!' : 'Error'}
            </h3>
            <p className="text-gray-700 mb-6">{popupMessage}</p>
            <button
              onClick={handlePopupClose}
              className="px-8 py-3 bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              OK
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default SignIn;
