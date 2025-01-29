"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter } from "lucide-react";
import Typewriter from "typewriter-effect";

const vouchers = [
  { name: "CashtoCode", img: "/ctc.png", desc: "Instant cash payments online." },
  { name: "iCash", img: "/icash.png", desc: "Secure digital cash vouchers." },
  { name: "AstroPay", img: "/astropay.png", desc: "Fast global payments." },
  { name: "Crypto Currency", img: "/crypto .png", desc: "Decentralized digital currency." },
  { name: "Neteller", img: "/net.png", desc: "E-wallet for online payments." },
  { name: "Skrill", img: "/skrill.png", desc: "Send & receive money globally." },
];

export default function LandingPage() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading

  // Simulate loading for 3 seconds
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  // Spinner component
  const Spinner = () => (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-500">Loading...</p>
    </div>
  );
  

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Show loading spinner if the page is loading */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 w-[90%] bg-gray-800 bg-opacity-80 p-4 rounded-xl shadow-lg flex justify-between items-center text-lg font-semibold backdrop-blur-md z-50 mx-auto left-0 right-0 mt-2"
          >
            <div className="flex justify-start items-center space-x-8">
              <a href="#about" className="hover:text-blue-400 font-serif text-xl hidden md:inline">
                About Us
              </a>
              <a href="#vouchers" className="hover:text-blue-400 font-serif text-xl hidden md:inline">
                Vouchers
              </a>
              <a href="#contact" className="hover:text-blue-400 font-serif text-xl hidden md:inline">
                Contact Us
              </a>
            </div>

            <span className="text-white font-serif text-xl md:inline-block">AffiliateMarket</span>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-gray-800 bg-opacity-80 p-4 rounded-xl shadow-lg flex flex-col items-center space-y-4 md:hidden">
                <a href="#about" className="hover:text-blue-400 font-serif text-xl">
                  About Us
                </a>
                <a href="#vouchers" className="hover:text-blue-400 font-serif text-xl">
                  Vouchers
                </a>
                <a href="#contact" className="hover:text-blue-400 font-serif text-xl">
                  Contact Us
                </a>
              </div>
            )}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 "  // Stacks vertically on mobile
          >
            <div className="text-center mt-90">
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400">Secure Crypto Payments</h1>
              <p className="mt-4 text-base md:text-lg text-gray-300">Experience the Future of Digital Transactions.</p>
              <div className="text-xl text-yellow-400 mt-4">
                <Typewriter
                  options={{
                    strings: [
                      "The Best Exchange to Buy",
                      "Sell and gift card and voucher",
                      "Get started with us and start earning money with us. We are here to help you in every possible way"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <motion.img
              src="/ic.png"
              alt="Crypto Payments"
              className="w-72 h-72 object-contain"
              style={{ marginTop: '6.25rem' }} // Equivalent to mt-9 in Tailwind
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Voucher Section */}
          <motion.section id="vouchers" className="mt-12 text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-8">Available Vouchers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
              {vouchers.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group" // Using group for hover effects
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{
                    rotateX: 0,
                    rotateY: 10,
                  }}
                  transition={{
                    opacity: { duration: 0.6 },
                    y: { type: 'spring', stiffness: 100, damping: 25, delay: index * 0.2 },
                  }}
                >
                  <Card
                    className="bg-gray-800 rounded-3xl cursor-pointer shadow-2xl hover:shadow-xl transform transition-all duration-300 ease-in-out group-hover:scale-105"
                    onClick={() => setSelected(item)}
                  >
                    <CardContent className="p-6 text-center">
                      <motion.img
                        src={item.img}
                        alt={item.name}
                        className="w-32 h-32 mx-auto object-contain transform transition-all duration-300 ease-in-out group-hover:scale-110"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      />
                      <h3 className="mt-4 text-2xl font-semibold text-yellow-400 group-hover:text-yellow-500">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-100">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* About Us Section */}
          <motion.section
            id="about"
            className="mt-20 flex flex-col-reverse md:flex-row items-center justify-center px-10 space-y-8 md:space-y-0 md:space-x-8" // Stacks vertically on mobile, horizontally on desktop
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/abiut.png"
              alt="About Us"
              className="w-72 h-72 md:w-96 md:h-96 rounded-lg" // Adjusted image size for mobile and desktop
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-300">About Us</h2>
              <p className="text-gray-300 mt-4 text-base md:text-lg">
                We are dedicated to providing fast and secure digital payment solutions worldwide.
              </p>
            </div>
          </motion.section>

          {/* Contact Us Section */}
          <motion.section
            id="contact"
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-blue-300">Contact Us</h2>
            <p className="text-gray-300 mt-4">Email us at support@securecrypto.com</p>

            <div className="mt-6">
              <a
                href="https://x.com/KashyapAkashh"  // Replace with your actual Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
              >
                <Twitter className="mr-2" />
                Follow us on X
              </a>
            </div>
          </motion.section>
          <footer className="mt-20 bg-gray-800 bg-opacity-80 text-gray-400 text-center p-6 rounded-t-lg backdrop-blur-md">
        &copy; 2025 Secure Payments | All Rights Reserved
      </footer>
        </>
      )}
    </div>
  );
}
