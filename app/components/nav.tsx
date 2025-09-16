'use client'
import { FaAngleDown } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";
import "../globals.css"

export default function App() {
    const [isMenu, setShow] = useState(false);
    const changeShow = () => {
    setShow(prevShow => {
            if (prevShow === true) {
              return false;
            }
            return true;
        });
    };
    return (
        <div className=" bg-[#3a3a3a] flex flex-row absolute top-0 left-0 w-full p-5 text-center shadow-2xl items-center content-center gap-5 justify-center">
            <a className=" flex flex-row text-center items-center text-2xl" onClick={changeShow}>Contact
                <motion.div
                    animate={{
                        translateY: [0,5,0,5,0]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                >
                    <FaAngleDown/>
                </motion.div>
            </a>
            {isMenu && (
            <div id="card" className="absolute top-20">
                <motion.div
                id="main_menu"
                initial={{ y: 0, opacity:0 }}
                animate={{ 
                    y: 5, 
                    opacity: 1
                }}
                exit={{ y: 0,opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 120 }}
              >
                <div className=" rounded-2xl bg-[#3a3a3a] p-2 w-fit h-fit shadow-2xl flex flex-col text-start gap-2 font-bold border-2">
                    <a href="https://discord.gg/35ByVCm5ah" target="blank">Discord</a>
                    <a href="https://mcmodels.net/vendors/3/rysenz" target="blank">MCmodel</a>
                    <a href="https://bsky.app/profile/rysenz.bsky.social" target="blank">BlueSky</a>
                </div>
              </motion.div>
            </div>
            )}
            <div className="self-end right-5 absolute bg-lime-600 font-bold not-sm:hidden p-2 rounded-br-2xl rounded-tl-2xl scale-50 sm:scale-100">Commission open</div>
            <div className="self-end right-5 absolute bg-lime-600 sm:hidden p-2 rounded-full  sm:scale-100"></div>
        </div>
    )
}