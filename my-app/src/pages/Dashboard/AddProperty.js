// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createShop } from "../../redux/slices/shopSlice/shopSlice.js";
// import { createApartment } from "../../redux/slices/apartmentSlice/apartmentSlice.js";
// import { useNavigate } from "react-router-dom";
// import InputField from "../../components/inputField/inputField";
// import Button from "../../components/Button/button";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const AddProperty = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [propertyType, setPropertyType] = useState("apartment");
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [tenant, setTenant] = useState("");
//   const [popupMessage, setPopupMessage] = useState(null);
//   const [popupType, setPopupType] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newProperty = {
//       name,
//       location,
//       tenant,
//     };

//     if (propertyType === "shop") {
//       dispatch(createShop(newProperty));
//     } else {
//       dispatch(createApartment(newProperty));
//     }

//     setName("");
//     setLocation("");
//     setTenant("");

//     setPopupMessage("Property added successfully!");
//     setPopupType("success");
//   };

//   const closePopup = () => {
//     setPopupMessage(null);
//     if (popupType === "success") {
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="w-full max-w-md p-8 bg-white border-2 border-gray-800 rounded-lg shadow-lg">

//         <h1 className="text-3xl text-highlight mb-6 text-center">
//           Add New {propertyType === "shop" ? "Shop" : "Apartment"}
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="propertyType" className="block text-highlight text-base mb-2">
//               Property Type:
//             </label>
//             <select
//               id="propertyType"
//               value={propertyType}
//               onChange={(e) => setPropertyType(e.target.value)}
//               className="shadow bg-primary appearance-none border border-accent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-highlight hover:bg-primary hover:text-white hover:border-highlight"
//             >
//               <option value="apartment">Apartment</option>
//               <option value="shop">Shop</option>
//             </select>
//           </div>

//           <InputField
//             label="Property Name"
//             name="name"
//             id="name"
//             placeholder="Enter property name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <InputField
//             label="Location"
//             name="location"
//             id="location"
//             placeholder="Enter property location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />

//           <InputField
//             label="Tenant (Optional)"
//             name="tenant"
//             id="tenant"
//             placeholder="Enter tenant name"
//             value={tenant}
//             onChange={(e) => setTenant(e.target.value)}
//           />

//             {/* Button section with Close button */}
//             <div className="flex my-4 gap-x-4">
//         <button
//             type="submit"
//             className="bg-highlight w-full hover:bg-highlightHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Add {propertyType === "shop" ? "Shop" : "Apartment"}
//           </button>
//           <Button text="Close" onClick={() => navigate("/dashboard")} />
//         </div>
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

// export default AddProperty;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createShop } from "../../redux/slices/shopSlice/shopSlice.js";
import { createApartment } from "../../redux/slices/apartmentSlice/apartmentSlice.js";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField/inputField";
import Button from "../../components/Button/button";
import Popup from "reactjs-popup";
import { Building2, MapPin, User, X } from "lucide-react";
import "reactjs-popup/dist/index.css";

const AddProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("apartment");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [tenant, setTenant] = useState("");
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      name,
      location,
      tenant,
    };

    if (propertyType === "shop") {
      dispatch(createShop(newProperty));
    } else {
      dispatch(createApartment(newProperty));
    }

    setName("");
    setLocation("");
    setTenant("");

    setPopupMessage("Property added successfully!");
    setPopupType("success");
  };

  const closePopup = () => {
    setPopupMessage(null);
    if (popupType === "success") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-newHighlight/20 via-white to-karayeGreen/10 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-karayeGreen to-accent rounded-3xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">
              Add New {propertyType === "shop" ? "Shop" : "Apartment"}
            </h1>
          </div>
          <p className="text-white/90 ml-16">Create a new property record in your system</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Type Selector */}
            <div className="bg-gradient-to-r from-newHighlight/10 to-karayeGreen/10 rounded-2xl p-6 border border-newHighlight/30">
              <label htmlFor="propertyType" className="block text-primary text-lg font-bold mb-3">
                Property Type
              </label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-white border-2 border-newHighlight rounded-xl py-4 px-4 text-primary font-semibold focus:outline-none focus:border-karayeGreen focus:ring-4 focus:ring-karayeGreen/20 transition-all shadow-sm hover:border-karayeGreen cursor-pointer"
              >
                <option value="apartment">🏢 Apartment</option>
                <option value="shop">🏪 Shop</option>
              </select>
            </div>

            {/* Property Name */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Property Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter property name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter property location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-4 focus:ring-karayeGreen/20 transition-all text-primary"
                />
              </div>
            </div>

            {/* Tenant (Optional) */}
            <div className="relative">
              <label className="block text-primary text-base font-bold mb-2">
                Tenant <span className="text-gray-400 font-normal text-sm">(Optional)</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="tenant"
                  id="tenant"
                  placeholder="Enter tenant name"
                  value={tenant}
                  onChange={(e) => setTenant(e.target.value)}
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
                Add {propertyType === "shop" ? "Shop" : "Apartment"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="px-6 py-4 bg-gray-100 text-highlight font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {popupMessage && (
        <Popup open={true} onClose={closePopup} closeOnDocumentClick>
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md">
            <div className="w-16 h-16 bg-gradient-to-r from-karayeGreen to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <p className="text-primary text-lg font-semibold text-center mb-6">{popupMessage}</p>
            <button
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-karayeGreen to-accent text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
            >
              OK
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default AddProperty;

