// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { createTenant, updateTenant } from "../../redux/slices/tenantSlice";
// import { useNavigate, useLocation } from "react-router-dom";
// import InputField from "../../components/inputField/inputField"; 
// import Button from "../../components/Button/button"; 
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const AddTenant = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const editTenant = location.state?.tenant;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [popupType, setPopupType] = useState(null);

//   useEffect(() => {
//     if (editTenant) setFormData(editTenant);
//   }, [editTenant]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editTenant) {
//         await dispatch(
//           updateTenant({ id: editTenant._id, ...formData })
//         ).unwrap();
//         setPopupMessage("Tenant updated successfully");
//         setPopupType("success");
//       } else {
//         await dispatch(createTenant(formData)).unwrap();
//         setPopupMessage("Tenant created successfully");
//         setPopupType("success");
//       }
//       setFormData({ name: "", email: "", password: "" });
//     } catch (error) {
//       setPopupMessage("Failed to save tenant");
//       setPopupType("error");
//     }
//   };

//   const closePopup = () => {
//     setPopupMessage(null);
//     if (popupType === "success") {
//       navigate("/dashboard/tenants");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
// <div className="w-full max-w-md p-8 bg-white border-2 border-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl text-highlight mb-6 text-center">
//           {editTenant ? "Edit Tenant" : "Add Tenant"}
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <InputField
//             label="Name"
//             name="name"
//             id="name"
//             placeholder="Enter tenant name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Email"
//             name="email"
//             id="email"
//             placeholder="Enter tenant email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Password"
//             name="password"
//             id="password"
//             placeholder="Enter tenant password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <div className="flex my-4 gap-x-4">
//             <Button text={editTenant ? "Update Tenant" : "Create Tenant"} />
//             <Button
//               text="Close"
//               onClick={() => navigate("/dashboard/tenants")}
//             />
//           </div>
//         </form>
//         {popupMessage && (
//           <Popup open={true} onClose={closePopup} closeOnDocumentClick>
//             <div className="w-full p-6 text-center">
//               <p className="text-primary mb-4">{popupMessage}</p>
//               <Button text="OK" onClick={closePopup} />
//             </div>
//           </Popup>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddTenant;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTenant, updateTenant } from "../../redux/slices/tenantSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import { User, Mail, Lock, X, CheckCircle2 } from "lucide-react";
import "reactjs-popup/dist/index.css";

const AddTenant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editTenant = location.state?.tenant;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState(null);

  useEffect(() => {
    if (editTenant) setFormData(editTenant);
  }, [editTenant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editTenant) {
        await dispatch(
          updateTenant({ id: editTenant._id, ...formData })
        ).unwrap();
        setPopupMessage("Tenant updated successfully");
        setPopupType("success");
      } else {
        await dispatch(createTenant(formData)).unwrap();
        setPopupMessage("Tenant created successfully");
        setPopupType("success");
      }
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setPopupMessage("Failed to save tenant");
      setPopupType("error");
    }
  };

  const closePopup = () => {
    setPopupMessage(null);
    if (popupType === "success") {
      navigate("/dashboard/tenants");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-newHighlight/20 via-white to-karayeGreen/10 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-karayeGreen to-accent rounded-3xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <User className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">
              {editTenant ? "Edit Tenant" : "Add Tenant"}
            </h1>
          </div>
          <p className="text-white/90 ml-16">Manage tenant information and accounts</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter tenant name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter tenant email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter tenant password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-karayeGreen to-accent text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {editTenant ? "Update Tenant" : "Create Tenant"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard/tenants")}
                className="px-6 py-4 bg-gray-100 text-highlight font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popupMessage && (
        <Popup open={true} onClose={closePopup} closeOnDocumentClick>
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md">
            <div className={`w-16 h-16 ${popupType === 'success' ? 'bg-gradient-to-r from-karayeGreen to-accent' : 'bg-red-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
              {popupType === 'success' ? (
                <CheckCircle2 className="w-8 h-8 text-white" />
              ) : (
                <X className="w-8 h-8 text-white" />
              )}
            </div>
            <p className="text-primary text-lg font-semibold text-center mb-6">{popupMessage}</p>
            <button
              onClick={closePopup}
              className={`w-full ${popupType === 'success' ? 'bg-gradient-to-r from-karayeGreen to-accent' : 'bg-red-500'} text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all`}
            >
              OK
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default AddTenant;
