import React, { useState,useEffect } from "react";
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const [theme, setTheme] = useState<'light' | 'dark'>('light');

useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light'); 
    }
  }, []);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove('light', 'dark'); 
    document.body.classList.add(newTheme); 
    localStorage.setItem('theme', newTheme); 
  };

//   <button className={styles.icons} onClick={toggleTheme}>
//           {theme === 'light' ? (
//             <FaRegMoon className={styles.icon} size={25} />
//           ) : (
//             <FaRegSun className={styles.icon} size={25} />
//           )}
//         </button>









// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = "/images/environment.jpg"; // Substituir por uma imagem realista
//     img.onload = () => setImageLoaded(true);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white text-green-900 p-8">
//       <motion.div 
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-center md:text-left"
//       >
//         <h1 className="text-4xl font-bold mb-4">Preserve o Meio Ambiente</h1>
//         <p className="text-lg mb-6">
//           Contribua para um mundo mais limpo denunciando amontoados de lixo e ajudando na reciclagem.
//         </p>
//         <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
//           Denunciar Amontoado
//         </button>
//       </motion.div>

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="md:w-1/2 flex justify-center"
//       >
//         {imageLoaded ? (
//           <img src="/images/environment.jpg" alt="Meio Ambiente" className="rounded-lg shadow-lg" />
//         ) : (
//           <div className="w-72 h-72 bg-gray-300 animate-pulse rounded-lg"></div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
