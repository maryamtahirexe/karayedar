// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateOwner,
//   clearMessage,
//   clearError,
//   fetchOwner,
// } from "../../redux/slices/updateSlice/updateSlice";
// import Button from "../../components/Button/button";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [oldPassword, setOldPassword] = useState("");
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, message, error, owner } = useSelector(
//     (state) => state.update
//   );

//   useEffect(() => {
//     dispatch(fetchOwner());
//   }, [dispatch]);

//   useEffect(() => {
//     if (owner) {
//       setEmail(owner.email);
//       setOldPassword(owner.password);
//     }
//   }, [owner]);

//   useEffect(() => {
//     if (message) {
//       setPopupMessage(message);
//       dispatch(clearMessage());
//     }
//     if (error) {
//       setPopupMessage(error);
//       dispatch(clearError());
//     }
//   }, [message, error, dispatch]);

//   const handleUpdate = () => {
//     setShowConfirmation(true);
//   };

//   const confirmUpdate = async () => {
//     try {
//       const passwordToUpdate = newPassword || oldPassword;

//       const response = await dispatch(
//         updateOwner({ email, newPassword: passwordToUpdate })
//       ).unwrap();

//       if (response.status === "success") {
//         setPopupMessage("Profile updated successfully");
//         setTimeout(() => setPopupMessage(null), 3000);
//       } else {
//         setPopupMessage(response.message || "Failed to update profile");
//       }

//       setShowConfirmation(false);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setPopupMessage(error.message || "Failed to update profile");
//     }
//   };

//   return (
//     <div className="p-6 m-2">
//       <h1 className="text-3xl mb-4 font-bold text-primary text-center">
//         Profile
//       </h1>
//       <div className="mb-4">
//         <label className="block text-primary mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           type="text"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-primary mb-2" htmlFor="oldPassword">
//           Old Password
//         </label>
//         <input
//           type="password"
//           id="oldPassword"
//           value={oldPassword}
//           disabled
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-primary mb-2" htmlFor="newPassword">
//           New Password
//         </label>
//         <input
//           type="password"
//           id="newPassword"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
//         />
//       </div>
//       <div className="flex justify-center space-x-7 mt-3">
//         <Button
//           text={loading ? "Updating..." : "Update"}
//           onClick={handleUpdate}
//           disabled={loading}
//           className="px-6 py-3"
//         />
//         <Button
//           text="Cancel"
//           onClick={() => navigate(-1)}
//           variant="secondary"
//           className="px-6 py-2"
//         />
//       </div>

//       {popupMessage && (
//         <Popup
//           open={true}
//           onClose={() => setPopupMessage(null)}
//           closeOnDocumentClick
//         >
//           <div className="w-full text-center p-4 rounded-lg shadow-lg">
//             {popupMessage}
//             <Button text="OK" onClick={() => setPopupMessage(null)} />
//           </div>
//         </Popup>
//       )}

//       {showConfirmation && (
//         <Popup
//           open={true}
//           onClose={() => setShowConfirmation(false)}
//           closeOnDocumentClick
//         >
//           <div className="w-full text-center p-4 rounded-lg shadow-lg">
//             <p>Are you sure you want to change your password?</p>
//             <div className="mt-4 gap-x-4 flex justify-around">
//               <Button text="Confirm" onClick={confirmUpdate} />
//               <Button
//                 text="Cancel"
//                 onClick={() => setShowConfirmation(false)}
//               />
//             </div>
//           </div>
//         </Popup>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOwner,
  clearMessage,
  clearError,
  fetchOwner,
} from "../../redux/slices/updateSlice/updateSlice";
import Button from "../../components/Button/button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, AlertCircle, CheckCircle, Shield } from "lucide-react";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message, error, owner } = useSelector(
    (state) => state.update
  );

  useEffect(() => {
    dispatch(fetchOwner());
  }, [dispatch]);

  useEffect(() => {
    if (owner) {
      setEmail(owner.email);
      setOldPassword(owner.password);
    }
  }, [owner]);

  useEffect(() => {
    if (message) {
      setPopupMessage(message);
      dispatch(clearMessage());
    }
    if (error) {
      setPopupMessage(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  const handleUpdate = () => {
    setShowConfirmation(true);
  };

  const confirmUpdate = async () => {
    try {
      const passwordToUpdate = newPassword || oldPassword;

      const response = await dispatch(
        updateOwner({ email, newPassword: passwordToUpdate })
      ).unwrap();

      if (response.status === "success") {
        setPopupMessage("Profile updated successfully");
        setTimeout(() => setPopupMessage(null), 3000);
      } else {
        setPopupMessage(response.message || "Failed to update profile");
      }

      setShowConfirmation(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      setPopupMessage(error.message || "Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-karayeGreen to-accent rounded-full mb-4 shadow-xl">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-primary mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your account settings and password
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative Header */}
          <div className="h-32 bg-gradient-to-r from-primary via-highlight to-accent relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-karayeGreen rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-newHighlight rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10 -mt-16 relative">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Account Information Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-karayeGreen bg-opacity-10 rounded-lg">
                    <Shield className="w-6 h-6 text-karayeGreen" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Account Information
                  </h2>
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-semibold text-primary mb-2" 
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-2 focus:ring-karayeGreen/20 transition-all text-gray-800 bg-gray-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="border-t-2 border-gray-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent bg-opacity-10 rounded-lg">
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Security Settings
                  </h2>
                </div>

                {/* Old Password Input */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-semibold text-primary mb-2" 
                    htmlFor="oldPassword"
                  >
                    Current Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      id="oldPassword"
                      value={oldPassword}
                      disabled
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-1">
                    Your current password is hidden for security
                  </p>
                </div>

                {/* New Password Input */}
                <div className="mb-8">
                  <label 
                    className="block text-sm font-semibold text-primary mb-2" 
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-2 focus:ring-karayeGreen/20 transition-all text-gray-800 bg-gray-50"
                      placeholder="Enter new password (optional)"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-1">
                    Leave empty to keep your current password
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t-2 border-gray-100">
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Updating...</span>
                    </div>
                  ) : (
                    "Update Profile"
                  )}
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="flex-1 sm:flex-none px-8 py-4 bg-gray-100 text-primary rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border-l-4 border-karayeGreen rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-karayeGreen flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700">
              <strong>Security Tip:</strong> Use a strong password with at least 8 characters, 
              including uppercase letters, numbers, and special characters.
            </p>
          </div>
        </div>
      </div>

      {/* Success/Error Popup */}
      {popupMessage && (
        <Popup
          open={true}
          onClose={() => setPopupMessage(null)}
          closeOnDocumentClick
          modal
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              popupMessage.includes("success") ? "bg-green-100" : "bg-red-100"
            }`}>
              {popupMessage.includes("success") ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-red-600" />
              )}
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              popupMessage.includes("success") ? "text-green-600" : "text-red-600"
            }`}>
              {popupMessage.includes("success") ? "Success!" : "Error"}
            </h3>
            <p className="text-gray-700 mb-6">{popupMessage}</p>
            <button
              onClick={() => setPopupMessage(null)}
              className="px-8 py-3 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              OK
            </button>
          </div>
        </Popup>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <Popup
          open={true}
          onClose={() => setShowConfirmation(false)}
          closeOnDocumentClick
          modal
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Confirm Changes
            </h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to update your profile? 
              {newPassword && " This will change your password."}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmUpdate}
                className="px-8 py-3 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-8 py-3 bg-gray-100 text-primary rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default ProfilePage;
