// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Card from "../../components/card/Card.js";
// import { RingLoader } from "react-spinners";
// import {
//   getAllShops,
//   deleteShop,
// } from "../../redux/slices/shopSlice/shopSlice";
// import {
//   getAllApartments,
//   deleteApartment,
// } from "../../redux/slices/apartmentSlice/apartmentSlice";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const {
//     shops,
//     loading: loadingShops,
//     error: errorShops,
//   } = useSelector((state) => state.shop);
//   const {
//     apartments,
//     loading: loadingApartments,
//     error: errorApartments,
//   } = useSelector((state) => state.apartment);

//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     dispatch(getAllApartments());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getAllShops());
//   }, [dispatch]);

// const filteredShops = (shops || []).filter((shop) =>
//   shop?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// );

// const filteredApartments = (apartments || []).filter((apartment) =>
//   apartment?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// );

//   return (
//     <div className="flex">
//       {/* Sidebar can be here */}
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//         {/* Search Bar and Add Property Button Container */}
//         <div className="flex items-center mb-6 w-full">
//           {/* Search Bar */}
//           <div className="flex bg-slate-300 items-center rounded-lg p-3 w-4/5 mr-3">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.414-1.414l4.348 4.348a1 1 0 01-1.414 1.414l-4.348-4.348zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-slate-300 w-full ml-2 outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           {/* Add Property Button */}
//           <Link to="/dashboard/add-property">
//             <button className="text-primary font-bold bg-slate-300 rounded-lg p-3">
//               Add Property
//             </button>
//           </Link>
//         </div>

//         {/* Shops Section */}
//         <h2 className="text-xl font-semibold mb-4">Shops</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {loadingShops ? (
//             <div className="flex justify-center items-center fixed inset-0 z-50">
//               <RingLoader size={60} color="#191343" loading={true} />
//             </div>
//           ) : errorShops ? (
//             <p>Error loading shops</p>
//           ) : filteredShops.length === 0 ? (
//             <p>No shops found.</p>
//           ) : (
//             filteredShops.map((shop) => (
//               <Card
//                 key={shop._id}
//                 type="Shop"
//                 id={shop._id}
//                 name={shop.name}
//                 location={shop.location}
//               />
//             ))
//           )}
//         </div>

//         {/* Apartments Section */}
//         <h2 className="text-xl font-semibold mb-4 mt-8">Apartments</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {loadingApartments ? (
//             <div className="flex justify-center items-center fixed inset-0 z-50">
//               <RingLoader size={60} color="#191343" loading={true} />
//             </div>
//           ) : errorApartments ? (
//             <p>Error loading apartments: {errorApartments}</p>
//           ) : filteredApartments.length === 0 ? (
//             <p>No apartments found.</p>
//           ) : (
//             filteredApartments.map((apartment) => (
//               <Card
//                 key={apartment._id}
//                 type="Apartment"
//                 id={apartment._id}
//                 name={apartment.name}
//                 location={apartment.location}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card.js";
import { RingLoader } from "react-spinners";
import {
  getAllShops,
  deleteShop,
} from "../../redux/slices/shopSlice/shopSlice";
import {
  getAllApartments,
  deleteApartment,
} from "../../redux/slices/apartmentSlice/apartmentSlice";
import { Link } from "react-router-dom";
import { Home, Search, Plus, Building2, Store, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    shops,
    loading: loadingShops,
    error: errorShops,
  } = useSelector((state) => state.shop);
  const {
    apartments,
    loading: loadingApartments,
    error: errorApartments,
  } = useSelector((state) => state.apartment);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAllApartments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllShops());
  }, [dispatch]);

  const filteredShops = (shops || []).filter((shop) =>
    shop?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredApartments = (apartments || []).filter((apartment) =>
    apartment?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalProperties = (shops?.length || 0) + (apartments?.length || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-karayeGreen to-accent rounded-2xl shadow-lg">
              <Home className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-primary">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your property overview</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-karayeGreen">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">Total Properties</p>
                  <p className="text-3xl font-bold text-primary">{totalProperties}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-karayeGreen" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">Shops</p>
                  <p className="text-3xl font-bold text-primary">{shops?.length || 0}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Store className="w-8 h-8 text-purple-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">Apartments</p>
                  <p className="text-3xl font-bold text-primary">{apartments?.length || 0}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <Building2 className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Search and Add Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties by name..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-2 focus:ring-karayeGreen/20 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link to="/dashboard/add-property">
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                <Plus className="w-5 h-5" />
                Add Property
              </button>
            </Link>
          </div>
        </div>

        {/* Shops Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Store className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Shops</h2>
          </div>
          
          {loadingShops ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <RingLoader size={60} color="#2a9df4" loading={true} />
                <p className="mt-4 text-gray-600 font-medium">Loading shops...</p>
              </div>
            </div>
          ) : errorShops ? (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-800 font-semibold">Error loading shops</p>
            </div>
          ) : filteredShops.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Shops Found</h3>
              <p className="text-gray-600">
                {searchQuery ? "Try adjusting your search" : "Start by adding your first shop"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShops.map((shop) => (
                <Card
                  key={shop._id}
                  type="Shop"
                  id={shop._id}
                  name={shop.name}
                  location={shop.location}
                />
              ))}
            </div>
          )}
        </div>

        {/* Apartments Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Building2 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Apartments</h2>
          </div>
          
          {loadingApartments ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <RingLoader size={60} color="#2a9df4" loading={true} />
                <p className="mt-4 text-gray-600 font-medium">Loading apartments...</p>
              </div>
            </div>
          ) : errorApartments ? (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <p className="text-red-800 font-semibold">Error loading apartments: {errorApartments}</p>
            </div>
          ) : filteredApartments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Apartments Found</h3>
              <p className="text-gray-600">
                {searchQuery ? "Try adjusting your search" : "Start by adding your first apartment"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApartments.map((apartment) => (
                <Card
                  key={apartment._id}
                  type="Apartment"
                  id={apartment._id}
                  name={apartment.name}
                  location={apartment.location}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
