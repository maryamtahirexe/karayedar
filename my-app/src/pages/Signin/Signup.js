import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Building2, ArrowRight, Eye, EyeOff, UserPlus } from "lucide-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Signup = () => {
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/owner", 
        formData
      );

      if (response.data) {
        setPopupMessage("Sign up successful!");
        setNavigateToDashboard(true);
      } else {
        setPopupMessage("Signup failed. Please try again.");
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
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#317879]/95 via-[#03254c]/90 to-[#191343]/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2a9df4] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9ECAE1] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left Section - Sign Up Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 order-2 lg:order-1">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2a9df4] to-[#317879] rounded-2xl mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#191343] mb-2">
                Create Account
              </h2>
              <p className="text-gray-600">Join KarayeDar today and start managing smarter</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-6">
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
                    placeholder="Create a strong password"
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

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Sign In Link */}
              <p className="text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <span
                  className="text-[#2a9df4] font-semibold cursor-pointer hover:underline hover:text-[#1e8bd9] transition-colors"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* Right Section - Branding */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 text-white order-1 lg:order-2">
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
              Start Managing Your Properties Like a Pro
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of property owners who have simplified their management workflow with KarayeDar's all-in-one platform.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2a9df4]/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#2a9df4]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Unlimited Properties</h3>
                  <p className="text-gray-300">Add and manage as many shops and apartments as you need</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2a9df4]/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-[#2a9df4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Tenant Management</h3>
                  <p className="text-gray-300">Keep track of all tenant information and communications</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2a9df4]/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-[#2a9df4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Automated Payments</h3>
                  <p className="text-gray-300">Track rent payments and send automated reminders</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-gray-200 italic">
                "KarayeDar has transformed the way I manage my properties. Everything is organized and accessible in one place!"
              </p>
              <p className="text-[#2a9df4] font-semibold mt-3">- Property Owner</p>
            </div>
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
              {navigateToDashboard ? 'Welcome to KarayeDar!' : 'Oops!'}
            </h3>
            <p className="text-gray-700 mb-6">{popupMessage}</p>
            <button
              onClick={handlePopupClose}
              className="px-8 py-3 bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              {navigateToDashboard ? "Let's Go!" : "OK"}
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Signup;