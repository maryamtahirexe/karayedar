import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Trash2, Building2, Store, AlertCircle, CheckCircle } from "lucide-react";

const Card = ({ type, id, name, location, onDelete }) => {
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setPopupMessage(
      `Are you sure you want to delete this ${type.toLowerCase()}?`
    );
    setConfirmationPopup(true);
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPopupMessage(`${type} deleted successfully!`);
      setShowSuccessPopup(true);
      if (onDelete) onDelete(id);
    } catch (error) {
      console.error(`Failed to delete ${type.toLowerCase()}:`, error);
      setPopupMessage(`Failed to delete ${type}. Please try again.`);
      setShowSuccessPopup(true);
    } finally {
      setConfirmationPopup(false);
      setIsDeleting(false);
    }
  };

  const closePopup = () => {
    setConfirmationPopup(false);
    setShowSuccessPopup(false);
    setPopupMessage("");
  };

  const PropertyIcon = type === "Shop" ? Store : Building2;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(42, 157, 244, 0.3)" }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#2a9df4] transition-all duration-300 relative overflow-hidden group"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2a9df4]/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-3 bg-gradient-to-br from-[#2a9df4] to-[#317879] rounded-xl shadow-lg">
              <PropertyIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#191343] mb-1 line-clamp-1">
                {name}
              </h2>
              <div className="flex items-center gap-2 text-[#317879]">
                <MapPin className="w-4 h-4" />
                <p className="text-sm font-medium">{location}</p>
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDelete}
            className="p-2 bg-red-50 hover:bg-red-100 rounded-xl transition-colors group/delete"
            aria-label="Delete"
          >
            <Trash2 className="w-5 h-5 text-red-500 group-hover/delete:text-red-600" />
          </motion.button>
        </div>

        {/* Type Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2a9df4]/10 to-[#317879]/10 rounded-full">
          <div className="w-2 h-2 bg-[#2a9df4] rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-[#191343]">{type}</span>
        </div>
      </motion.div>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {confirmationPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                Confirm Deletion
              </h3>
              <p className="text-gray-600 text-center mb-6">{popupMessage}</p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isDeleting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Deleting...
                    </div>
                  ) : (
                    "Yes, Delete"
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closePopup}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 text-center mb-3">
                Success!
              </h3>
              <p className="text-gray-600 text-center mb-6">{popupMessage}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closePopup}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                OK
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};



export default Card;
