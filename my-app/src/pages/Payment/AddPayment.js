// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { createPayment, updatePayment } from "../../redux/slices/paymentSlice";
// import InputField from "../../components/inputField/inputField";
// import Button from "../../components/Button/button";
// import { useNavigate, useLocation } from "react-router-dom";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// const AddPayment = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const editPayment = location.state?.payment;

//   const [formData, setFormData] = useState({
//     amount: "",
//     bankAccountNumber: "",
//     message: "",
//   });
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [popupType, setPopupType] = useState(null);

//   useEffect(() => {
//     if (editPayment) setFormData(editPayment);
//   }, [editPayment]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editPayment) {
//         await dispatch(updatePayment({ id: editPayment._id, ...formData })).unwrap();
//         setPopupMessage("Payment updated successfully");
//         setPopupType("success");
//       } else {
//         await dispatch(createPayment(formData)).unwrap();
//         setPopupMessage("Payment created successfully");
//         setPopupType("success");
//       }
//       setFormData({ amount: "", bankAccountNumber: "", message: "" });
//     } catch (error) {
//       setPopupMessage("Failed to save payment");
//       setPopupType("error");
//     }
//   };

//   const closePopup = () => {
//     setPopupMessage(null);
//     if (popupType === "success") {
//       navigate("/dashboard/payments");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
// <div className="w-full max-w-md p-8 bg-white border-2 border-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl text-highlight mb-6 text-center">
//           {editPayment ? "Edit Payment" : "Add Payment"}
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <InputField
//             label="Amount"
//             name="amount"
//             id="amount"
//             placeholder="Enter payment amount"
//             value={formData.amount}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Bank Account Number"
//             name="bankAccountNumber"
//             id="bankAccountNumber"
//             placeholder="Enter bank account number"
//             value={formData.bankAccountNumber}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Message"
//             name="message"
//             id="message"
//             placeholder="Enter a message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           <div className="flex my-4 gap-x-4">
//             <Button text={editPayment ? "Update Payment" : "Create Payment"} />
//             <Button text="Close" onClick={() => navigate("/dashboard/payments")} />
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

// export default AddPayment;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPayment, updatePayment } from "../../redux/slices/paymentSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from 'reactjs-popup';
import { DollarSign, CreditCard, MessageSquare, X, CheckCircle2 } from "lucide-react";
import 'reactjs-popup/dist/index.css';

const AddPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editPayment = location.state?.payment;

  const [formData, setFormData] = useState({
    amount: "",
    bankAccountNumber: "",
    message: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState(null);

  useEffect(() => {
    if (editPayment) setFormData(editPayment);
  }, [editPayment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editPayment) {
        await dispatch(updatePayment({ id: editPayment._id, ...formData })).unwrap();
        setPopupMessage("Payment updated successfully");
        setPopupType("success");
      } else {
        await dispatch(createPayment(formData)).unwrap();
        setPopupMessage("Payment created successfully");
        setPopupType("success");
      }
      setFormData({ amount: "", bankAccountNumber: "", message: "" });
    } catch (error) {
      setPopupMessage("Failed to save payment");
      setPopupType("error");
    }
  };

  const closePopup = () => {
    setPopupMessage(null);
    if (popupType === "success") {
      navigate("/dashboard/payments");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-newHighlight/20 via-white to-karayeGreen/10 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-karayeGreen to-accent rounded-3xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <DollarSign className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">
              {editPayment ? "Edit Payment" : "Add Payment"}
            </h1>
          </div>
          <p className="text-white/90 ml-16">Record payment transactions and details</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Enter payment amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Bank Account Number */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Bank Account Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="bankAccountNumber"
                  id="bankAccountNumber"
                  placeholder="Enter bank account number"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

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
                  placeholder="Enter a message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary resize-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-karayeGreen to-accent text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {editPayment ? "Update Payment" : "Create Payment"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard/payments")}
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

export default AddPayment;

