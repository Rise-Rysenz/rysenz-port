'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function App() {
    const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch('/api/portfolio-images')
      .then(res => res.json())
      .then(data => setImages(data.images))
      .catch(err => console.error('Error loading images:', err));
  }, []);
    return (
        <div className="flex flex-col bg-[#3a3a3a] w-full h-fit p-5 text-center text-5xl gap-5">
            <h1>Pixelart</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center  items-center rounded-md gap-4 content-center text-center items-center">
            {images.length > 0 ? (
              images.map((imageName, index) => (
                <motion.div 
                  key={index} 
                  className="shadow-2xl bg-[#252525] rounded-md h-fit w-fit overflow-hidden col-span-1 p-5"
                  whileInView={{translateY: [20,0], opacity:[0,1]}}
                  transition={{
                      duration: 1,
                      ease: "easeInOut",
                      times: [0, 1]
                  }}
                >
                  <Image 
                    src={`/portfolio/${imageName}`} 
                    alt={`Portfolio image ${index + 1}`} 
                    width={512} 
                    height={512}
                    className="object-cover rounded-md hover:scale-150 hover:transition-all duration-500"
                  />
                </motion.div>
              ))
            ) : (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="shadow-2xl p-2 bg-[#252525] rounded-md h-64 w-64 flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              ))
            )}
          </div>
        </div>
    )
}