import { motion } from "framer-motion";
import { Building2, Users, DollarSign, MessageSquare, Home, Store, FileText, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

function KarayeDarLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#191343] bg-opacity-95 backdrop-blur-lg shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-[#2a9df4]" />
            <span className="text-2xl font-bold text-white">KarayeDar</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-white hover:text-[#2a9df4] transition-colors px-4 py-2">
              Features
            </a>
            <a href="#about" className="text-white hover:text-[#2a9df4] transition-colors px-4 py-2">
              About
            </a>
            <a href="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 text-white border-2 border-[#2a9df4] rounded-full hover:bg-[#2a9df4] transition-all font-semibold"
              >
                Sign In
              </motion.button>
            </a>
            <a href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#2a9df4] text-white rounded-full hover:bg-[#1e8bd9] transition-all font-semibold shadow-lg"
              >
                Sign Up
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#03254c] border-t border-[#2a9df4] border-opacity-20"
          >
            <div className="px-6 py-4 space-y-3">
              <a href="#features" className="block text-white hover:text-[#2a9df4] transition-colors py-2">
                Features
              </a>
              <a href="#about" className="block text-white hover:text-[#2a9df4] transition-colors py-2">
                About
              </a>
              <a href="/signin" className="block">
                <button className="w-full px-6 py-2.5 text-white border-2 border-[#2a9df4] rounded-full hover:bg-[#2a9df4] transition-all font-semibold">
                  Sign In
                </button>
              </a>
              <a href="/signup" className="block">
                <button className="w-full px-6 py-2.5 bg-[#2a9df4] text-white rounded-full hover:bg-[#1e8bd9] transition-all font-semibold">
                  Sign Up
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Modern houses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191343] via-[#03254c]/90 to-[#191343]/80"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <Building2 className="w-24 h-24 mx-auto mb-6 text-[#2a9df4] drop-shadow-2xl" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-7xl md:text-9xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#2a9df4] via-[#9ECAE1] to-[#2a9df4] bg-clip-text text-transparent drop-shadow-2xl">
              KarayeDar
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-2xl md:text-4xl max-w-3xl mx-auto leading-relaxed mb-4 font-bold text-shadow"
          >
            Your Complete Property Management Solution
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200 mb-10"
          >
            Manage shops, apartments, tenants, and rent payments all in one powerful admin portal.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-12 py-5 bg-gradient-to-r from-[#2a9df4] to-[#317879] text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-[#2a9df4]/50 transition-all">
                Get Started Free
              </button>
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-12 py-5 bg-white bg-opacity-10 backdrop-blur-md border-2 border-white text-white text-xl font-bold rounded-full hover:bg-opacity-20 transition-all">
                Learn More
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#2a9df4] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#317879] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#9ECAE1] rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#191343] to-[#03254c] mb-8"
          >
            Simplify Property Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          >
            KarayeDar empowers property owners with a comprehensive admin portal to effortlessly manage properties, 
            track tenants, collect rent, and handle communications—all from a single, intuitive dashboard.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Card 1 - Property Management */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.08, rotateZ: 2, y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#2a9df4]/30 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a9df4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80"
                alt="Property Management"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="fallback-icon hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-[#191343] to-[#03254c]">
                <Building2 className="w-24 h-24 text-[#2a9df4]" />
              </div>
            </div>
            <div className="p-8 relative">
              <div className="flex items-center justify-center mb-5 -mt-16">
                <div className="p-4 bg-gradient-to-br from-[#2a9df4] to-[#317879] rounded-2xl shadow-xl">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-[#191343] mb-4 text-center">
                Property Management
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Add and organize shops and apartments with ease. Keep all your property details in one centralized location.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Tenant Association */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.08, rotateZ: -2, y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#317879]/30 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#317879]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80"
                alt="Tenant Management"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="fallback-icon hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-[#03254c] to-[#317879]">
                <Users className="w-24 h-24 text-[#9ECAE1]" />
              </div>
            </div>
            <div className="p-8 relative">
              <div className="flex items-center justify-center mb-5 -mt-16">
                <div className="p-4 bg-gradient-to-br from-[#317879] to-[#03254c] rounded-2xl shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-[#191343] mb-4 text-center">
                Tenant Association
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Link tenants to specific properties and maintain comprehensive profiles for seamless management.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Rent Management */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.08, rotateZ: 2, y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#2a9df4]/30 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a9df4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
                alt="Rent Management"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="fallback-icon hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-[#317879] to-[#2a9df4]">
                <DollarSign className="w-24 h-24 text-[#2a9df4]" />
              </div>
            </div>
            <div className="p-8 relative">
              <div className="flex items-center justify-center mb-5 -mt-16">
                <div className="p-4 bg-gradient-to-br from-[#2a9df4] to-[#9ECAE1] rounded-2xl shadow-xl">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-[#191343] mb-4 text-center">
                Rent Management
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Track payments, send reminders, and manage rent collection with automated tools and reports.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Communication Hub */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ scale: 1.08, rotateZ: -2, y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#317879]/30 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#317879]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                alt="Communication"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="fallback-icon hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-[#2a9df4] to-[#9ECAE1]">
                <MessageSquare className="w-24 h-24 text-[#191343]" />
              </div>
            </div>
            <div className="p-8 relative">
              <div className="flex items-center justify-center mb-5 -mt-16">
                <div className="p-4 bg-gradient-to-br from-[#9ECAE1] to-[#2a9df4] rounded-2xl shadow-xl">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-[#191343] mb-4 text-center">
                Communication Hub
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Handle tenant requests, messages, and maintenance issues efficiently through a unified inbox.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlighted Features Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Modern property"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#191343] via-[#03254c] to-[#191343]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-20"
          >
            Everything You Need, <span className="text-[#2a9df4]">All in One Place</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Home, title: "Shop & Apartment Listings", desc: "Manage multiple property types with custom fields and detailed information" },
              { icon: FileText, title: "Document Management", desc: "Store leases, contracts, and important documents securely" },
              { icon: Shield, title: "Secure & Reliable", desc: "Your data is protected with enterprise-grade security measures" },
              { icon: Store, title: "Custom Property Fields", desc: "Tailor property details to match your specific needs" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: idx % 2 === 0 ? 10 : -10 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 p-8 bg-white bg-opacity-5 rounded-3xl backdrop-blur-md hover:bg-opacity-10 transition-all border border-white border-opacity-10 shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-gradient-to-br from-[#2a9df4] to-[#317879] rounded-2xl flex-shrink-0 shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80"
            alt="Beautiful house"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191343]/95 via-[#2a9df4]/90 to-[#317879]/95"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
          >
            Ready to Transform Your<br />
            <span className="text-[#9ECAE1]">Property Management?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Join hundreds of property owners who trust KarayeDar to streamline their operations and maximize efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-14 py-6 bg-white text-[#191343] text-xl font-extrabold rounded-full shadow-2xl hover:shadow-white/30 transition-all">
                Start Your Free Trial
              </button>
            </motion.a>
            <motion.a
              href="/signin"
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-14 py-6 bg-transparent border-4 border-white text-white text-xl font-extrabold rounded-full hover:bg-white hover:text-[#191343] transition-all">
                Sign In Now
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191343] text-white py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building2 className="w-8 h-8 text-[#2a9df4]" />
            <span className="text-2xl font-bold">KarayeDar</span>
          </div>
          <p className="text-gray-400">© 2024 KarayeDar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default KarayeDarLanding;