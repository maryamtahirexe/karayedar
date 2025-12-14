// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { createRequest, updateRequest } from "../../redux/slices/requestSlice";
// import InputField from "../../components/inputField/inputField";
// import Button from "../../components/Button/button";
// import { useNavigate, useLocation } from "react-router-dom";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const AddRequest = ({ label }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const editRequest = location.state?.request;

//   const [formData, setFormData] = useState({
//     message: "",
//     status: "Pending",
//     type: "",
//   });
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [popupType, setPopupType] = useState(null);

//   useEffect(() => {
//     if (editRequest) setFormData(editRequest);
//   }, [editRequest]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editRequest) {
//         await dispatch(
//           updateRequest({ id: editRequest._id, ...formData })
//         ).unwrap();
//         setPopupMessage("Request updated successfully");
//         setPopupType("success");
//       } else {
//         await dispatch(createRequest(formData)).unwrap();
//         setPopupMessage("Request created successfully");
//         setPopupType("success");
//       }
//       setFormData({ message: "", status: "Pending", type: "" });
//     } catch (error) {
//       setPopupMessage("Failed to save request");
//       setPopupType("error");
//     }
//   };

//   const closePopup = () => {
//     setPopupMessage(null);
//     if (popupType === "success") {
//       navigate("/dashboard/requests");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="w-full max-w-md p-8 bg-white border-2 border-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl text-highlight mb-6 text-center">
//           {editRequest ? "Edit Request" : "Add Request"}
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <InputField
//             label="Message"
//             name="message"
//             id="message"
//             placeholder="Enter request message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           <div className="mb-4">
//             <label
//               htmlFor="status"
//               className="block text-highlight text-base mb-2"
//             >
//               Status
//             </label>
//             <select
//               name="status"
//               id="status"
//               className="shadow bg-primary appearance-none border border-accent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-highlight hover:bg-primary hover:text-white hover:border-highlight"
//               value={formData.status}
//               onChange={handleChange}
//             >
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//               <option value="In Progress">In Progress</option>
//             </select>
//           </div>

//           <InputField
//             label="Type"
//             name="type"
//             id="type"
//             placeholder="Enter request type"
//             value={formData.type}
//             onChange={handleChange}
//           />
//           <div className="flex my-4 gap-x-4">
//             <Button text={editRequest ? "Update Request" : "Create Request"} />
//             <Button
//               text="Close"
//               onClick={() => navigate("/dashboard/requests")}
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

// export default AddRequest;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createRequest, updateRequest } from "../../redux/slices/requestSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import { MessageSquare, Type, CheckCircle2, X } from "lucide-react";
import "reactjs-popup/dist/index.css";

const AddRequest = ({ label }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editRequest = location.state?.request;

  const [formData, setFormData] = useState({
    message: "",
    status: "Pending",
    type: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState(null);

  useEffect(() => {
    if (editRequest) setFormData(editRequest);
  }, [editRequest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editRequest) {
        await dispatch(
          updateRequest({ id: editRequest._id, ...formData })
        ).unwrap();
        setPopupMessage("Request updated successfully");
        setPopupType("success");
      } else {
        await dispatch(createRequest(formData)).unwrap();
        setPopupMessage("Request created successfully");
        setPopupType("success");
      }
      setFormData({ message: "", status: "Pending", type: "" });
    } catch (error) {
      setPopupMessage("Failed to save request");
      setPopupType("error");
    }
  };

  const closePopup = () => {
    setPopupMessage(null);
    if (popupType === "success") {
      navigate("/dashboard/requests");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-newHighlight/20 via-white to-karayeGreen/10 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-karayeGreen to-accent rounded-3xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">
              {editRequest ? "Edit Request" : "Add Request"}
            </h1>
          </div>
          <p className="text-white/90 ml-16">Manage tenant requests and communications</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Message */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-accent" />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter request message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary resize-none"
                />
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-r from-newHighlight/10 to-karayeGreen/10 rounded-2xl p-6 border border-newHighlight/30">
              <label htmlFor="status" className="block text-primary text-lg font-bold mb-3">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full bg-white border-2 border-newHighlight rounded-xl py-4 px-4 text-primary font-semibold focus:outline-none focus:border-karayeGreen focus:ring-4 focus:ring-karayeGreen/20 transition-all shadow-sm hover:border-karayeGreen cursor-pointer"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Pending">⏳ Pending</option>
                <option value="Completed">✅ Completed</option>
                <option value="In Progress">🔄 In Progress</option>
              </select>
            </div>

            {/* Type */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Type
              </label>
              <div className="relative">
                <Type className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="Enter request type"
                  value={formData.type}
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
                {editRequest ? "Update Request" : "Create Request"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard/requests")}
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

export default AddRequest;
