// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTenants, deleteTenant } from "../../redux/slices/tenantSlice";
// import { useNavigate } from "react-router-dom";
// import { RingLoader } from "react-spinners";

// const Tenant = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { tenants, loading, error } = useSelector((state) => state.tenants);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     dispatch(fetchTenants());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteTenant(id));
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredTenants = tenants.filter(
//     (tenant) =>
//       tenant.name &&
//       tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-6 m-2">
//       <div className="flex mb-6">
//         <div className="flex bg-slate-300 items-center rounded-lg p-3 w-4/5">
//           <svg
//             className="w-5 h-5 text-gray-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M12.9 14.32a8 8 0 111.414-1.414l4.348 4.348a1 1 0 01-1.414 1.414l-4.348-4.348zM8 14a6 6 0 100-12 6 6 0 000 12z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search tenants..."
//             className="bg-slate-300 ml-2 w-full outline-none"
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//         </div>
//         <button
//           className="text-primary font-bold bg-slate-300 rounded-lg p-3 ml-3 w-1/5"
//           onClick={() => navigate("/dashboard/manage-tenant")}
//         >
//           Add Tenant
//         </button>
//       </div>
//       <h1 className="text-3xl mb-4 font-bold text-primary">Tenants</h1>
//       <ul className="w-full divide-y divide-primary">
//         {loading ? (
//           <div className="flex justify-center items-center fixed inset-0 z-50">
//             <RingLoader size={60} color="#191343" loading={true} />
//           </div>
//         ) : error ? (
//           <div className="flex justify-center items-center fixed inset-0 z-50">
//             <RingLoader size={60} color="#191343" loading={true} />
//           </div>
//         ) : filteredTenants.length === 0 ? (
//           <li className="p-4 text-center">No tenants found.</li>
//         ) : (
//           filteredTenants.map((tenant) => (
//             <li
//               key={tenant._id}
//               className="flex justify-between items-center p-4 mb-2 rounded"
//             >
//               <span>{tenant.name}</span>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() =>
//                     navigate("/dashboard/manage-tenant", {
//                       state: { tenant },
//                     })
//                   }
//                   aria-label="Edit"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-primary hover:text-highlight transition-colors duration-300"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={() => handleDelete(tenant._id)}
//                   aria-label="Delete"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-primary hover:text-highlight transition-colors duration-300"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Tenant;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenants, deleteTenant } from "../../redux/slices/tenantSlice";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { Users, Search, Edit2, Trash2, UserPlus, Mail, Phone } from "lucide-react";

const Tenant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tenants, loading, error } = useSelector((state) => state.tenants);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    dispatch(fetchTenants());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTenant(id));
    setDeleteConfirm(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name &&
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-newHighlight/20 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-karayeGreen to-accent rounded-2xl shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-primary">Tenants</h1>
              <p className="text-highlight">Manage your tenant information</p>
            </div>
          </div>

          {/* Search and Add Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tenants by name..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-karayeGreen focus:outline-none focus:ring-2 focus:ring-karayeGreen/20 transition-all shadow-sm"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/dashboard/manage-tenant")}
            >
              <UserPlus className="w-5 h-5" />
              Add Tenant
            </button>
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <RingLoader size={60} color="#2a9df4" loading={true} />
              <p className="mt-4 text-highlight font-medium">Loading tenants...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-red-800">Error Loading Tenants</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        ) : filteredTenants.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-newHighlight/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-karayeGreen" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">No Tenants Found</h3>
            <p className="text-highlight mb-6">
              {searchQuery ? "Try adjusting your search query" : "Start by adding your first tenant"}
            </p>
            <button
              onClick={() => navigate("/dashboard/manage-tenant")}
              className="px-8 py-3 bg-gradient-to-r from-karayeGreen to-accent text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Add Your First Tenant
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTenants.map((tenant) => (
              <div
                key={tenant._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header with Gradient */}
                <div className="h-32 bg-gradient-to-r from-primary via-highlight to-accent relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-karayeGreen rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-newHighlight rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Avatar */}
                <div className="px-6 -mt-12 relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <Users className="w-10 h-10 text-karayeGreen" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4">
                  <h3 className="text-xl font-bold text-primary mb-3">{tenant.name}</h3>
                  
                  {tenant.email && (
                    <div className="flex items-center gap-2 text-highlight mb-2">
                      <Mail className="w-4 h-4 text-karayeGreen" />
                      <span className="text-sm">{tenant.email}</span>
                    </div>
                  )}
                  
                  {tenant.phone && (
                    <div className="flex items-center gap-2 text-highlight mb-4">
                      <Phone className="w-4 h-4 text-karayeGreen" />
                      <span className="text-sm">{tenant.phone}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button
                      onClick={() =>
                        navigate("/dashboard/manage-tenant", {
                          state: { tenant },
                        })
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-newHighlight/20 text-karayeGreen rounded-xl hover:bg-newHighlight/30 transition-all font-medium"
                      aria-label="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(tenant._id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-medium"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 text-center">Delete Tenant</h3>
            <p className="text-highlight mb-6 text-center">
              Are you sure you want to delete this tenant? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-6 py-3 bg-gray-100 text-primary rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tenant;