'use client'
import Image from "next/image";
import BANNER from '../public/banner.png';
import { motion } from "motion/react";
import CARD from './components/cards';
export default function Home() {

  return (
    <motion.div
      animate={{translateY: [20,0], opacity:[0,1]}}
      transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.8]
      }}
    >
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full justify-center">
          <div id="main_card" className="bg-[#3a3a3a] w-full h-fit rounded-md p-5 flex gap-10 flex-col content-center text-center items-center">
            <Image src={BANNER} alt="Banner" className=" not-sm:hidden"/>
            <div className="flex flex-row not-sm:flex-col text-center items-center gap-10">
              <Image 
                src="https://mc-heads.net/body/Rysenz"
                alt="Profile" 
                width={200}
                height={200}
                className="top-96 border-4 border-2 border-transparent not-sm:hidden"
              />
              <Image 
                src="https://mc-heads.net/avatar/Rysenz"
                alt="Profile" 
                width={200}
                height={200}
                className="top-96 border-4 border-2 border-transparent sm:hidden rounded-full"
              />
              <div className="text-start not-sm:text-center" id="text-top">
                <h1 className=" not-sm:text-sm not-sm:font-bold sm:text-4xl sm:font-bold">Welcome Everyone; I'm Rise</h1>
                <p className=" not-sm:text-sm">I'm Pixelartist/Developer/CEO At Rysenz Studio</p>
              </div>
            </div>
          </div>
          <CARD/>
        </main>
      </div>
    </motion.div>
  );
}