import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Users, 
  CreditCard, 
  MessageSquare, 
  User, 
  LogOut,
  ChevronRight
} from "lucide-react";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("property");
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    navigate("/");
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const menuItems = [
    { id: "property", label: "Property", icon: Home, path: "/dashboard" },
    { id: "tenants", label: "Tenants", icon: Users, path: "/dashboard/tenants" },
    { id: "payments", label: "Payments", icon: CreditCard, path: "/dashboard/payments" },
    { id: "requests", label: "Requests", icon: MessageSquare, path: "/dashboard/requests" },
    { id: "profile", label: "Profile", icon: User, path: "/dashboard/profile/update-password" },
  ];

  return (
    <>
      <div className="w-64 h-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white fixed flex flex-col justify-between shadow-2xl">
        {/* Logo Section */}
        <div className="py-6 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-10 px-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src={logo} alt="Logo" className="size-11" />
            </div>
            <Link to="/dashboard" className="text-2xl font-bold ml-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              KarayeDar
            </Link>
          </motion.div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setActiveItem(item.id)}
                  className="block w-full"
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                      activeItem === item.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        activeItem === item.id ? "text-white" : "text-blue-300 group-hover:text-white"
                      }`} 
                    />
                    <span className={`ml-3 font-medium ${
                      activeItem === item.id ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {item.label}
                    </span>
                    <ChevronRight 
                      className={`ml-auto w-4 h-4 transition-all duration-300 ${
                        activeItem === item.id 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Logout Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 border-t border-white/10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
          >
            <LogOut className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition-colors" />
            <span className="ml-2 font-medium text-gray-300 group-hover:text-red-400 transition-colors">
              Logout
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Logout Modal - Moved outside sidebar div with higher z-index */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white p-8 text-center rounded-2xl shadow-2xl max-w-md mx-4 relative z-[10000]"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Confirm Logout</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to logout? You will be redirected to the home page.
              </p>
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={confirmLogout}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Yes, Logout
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;