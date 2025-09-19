'use client'
import Image from "next/image";
import { motion } from "motion/react";
import "../globals.css";
import PFP from '../../public/rise_fullbody.png';
export default function App() {

    return (
        <div className="flex flex-col w-full h-fit p-5 text-center gap-5 not-sm:gap-2 not-sm:p-2">
            <h1 className=" not-sm:text-[1.2rem] sm:text-[2.5rem] font-bold">About me</h1>
            <div className=" flex flex-col justify-center justify-items-center content-center text-center gap-4 not-sm:text-xs items-center">
                <p>Hello everyone~, I'm Rise 20 Year old live in Thailand I'm fullstack freelancer about Minecraft I can do scripting by Skript and Json or Js or Ts</p>
                <p >and also I can Modeling / Pixelart as Hight quality I'm CEO of <a className=" text-[#ff3939] hover:cursor-pointer">Rysenz Studio</a></p>
                <p className=" mb-12">You can find my work at <a className=" text-[#ff3939] hover:cursor-pointer" href="https://mcmodels.net/vendors/3/rysenz">MCmodel</a>,<a className=" text-[#ff3939] hover:cursor-pointer" href="https://bsky.app/profile/rysenz.bsky.social">Bluesky</a> and <a className=" text-[#ff3939] hover:cursor-pointer" href="https://discord.gg/35ByVCm5ah">Discord</a></p>
                <motion.div 
                  className=" grid grid-cols-2 w-full justify-start items-start h-full overflow-hidden sm:gap-4 lg:gap-0"
                  whileInView={{translateY: [20,0], opacity:[0,1]}}
                  transition={{
                      duration: 1,
                      ease: "easeInOut",
                      times: [0, 1]
                  }}
                >
                    <div className=" text-start flex flex-col gap-2">
                        <section className=" not-sm:text-xs">
                            <h1 className=" not-sm:text-lg font-bold text-3xl not-sm:text-purple-400 not-sm:underline p-2 sm:bg-purple-400 w-fit">Why I'm be the Minecraft freelancer?</h1>
                            <p className=" indent-5 m-4">Before I played Minecraft I'm kid who play retro game with my Dad like SuperMario Bros, Galaga, Pokemon Red, Kirby, Contra that's make me love Pixel game</p>
                            <p className=" indent-5 m-4">Until 2012 my brother is people who let me know about Minecraft version 1.6.2 and I'm very happy to play it and I researched everything from the Minecraft "Who made this game", "why he made this game?"</p>
                            <p className=" indent-5 m-4">And I said it to make motivation "Someday I'll be Mojang team" I learn and try to make server on Minecraft Bedrock in 2014 Just a colo server by leet.cc and try to learn about add-on try to make robot that's will follow us and help us when got attack by other monster
                            and I get back to my home "Minecraft Java" to make server again in version 1.8.9
                            </p>
                            <p className=" indent-5 m-4">After many years I study about <span className="font-bold">Programming</span> and <span className="font-bold">Gamedesign</span> and after 2021 I come back to Minecraft dev community
                            I see many things changed we got custom model data and many cool things and that's the point I'm start to be fullstack minecraft freelancer again</p>
                        </section>
                        
                    </div>
                    <div className=" text-start flex flex-col gap-6"> 
                        <h1 className=" not-sm:text-lg font-bold text-3xl p-2 not-sm:text-purple-400 not-sm:underline sm:bg-purple-400 w-fit">My works timeline</h1>
                        <div className=" flex flex-row gap-4">
                            <div className=" flex flex-col">
                                <div className=" rounded-full not-sm:w-2 w-5 h-full mt-1 not-sm:mt-1  bg-[#464646] overflow-hidden">
                                    <div className=" bg-white w-full h-5 rounded-full mt-5 xl:mt-1"/>
                                    <div className=" bg-white w-full h-5 rounded-full mt-20 lg:mt-15 xl:mt-10"/>
                                    <div className=" bg-white w-full h-5 rounded-full mt-9 lg:mt-8 xl:mt-5"/>
                                    <div className=" bg-lime-300 w-full h-5 rounded-full mt-9 lg:mt-7"/>
                                    <div className=" bg-lime-300 w-full h-5 rounded-full mt-33 lg:mt-23 xl:mt-12"/>
                                    <div className=" bg-lime-300 w-full h-5 rounded-full mt-30 lg:mt-25 xl:mt-10"/>
                                    <div className=" bg-lime-300 w-full h-5 rounded-full mt-22 lg:mt-13 xl:mt-9"/>
                                </div>
                            </div>
                            <section className=" flex flex-col text-start content-center items-start gap-4 not-sm:text-xs">
                                <p className=" text-[#757575] ">Learn about add on Minecraft pe version 1.1.5 with by try to add robot that's will help us fight monster like iron golem</p>
                                <p className=" text-[#757575]">Server owner and system freelancer | 2015 - Dec 2024</p>
                                <p className=" text-[#757575]">Work on Turtle Pixel | Mid 2022 - Jan 2023</p>
                                <p >Open my own commission store Named Cardbox in Jan/9/2023 and Change to Multipixel and change it to Eclipse and change to Rysenz | 2023 - Now</p>
                                <p>Join Mcmodel and sells first product at Sep/11/2023 &#40;Product Deleted&#41; and has been selling products continuously up until now | 2023 - Now </p>
                                <p className=" bg-gradient-to-r bg-clip-text text-transparent from-lime-300 to-yellow-400 p-2 font-bold">Try to get back to learn about Minecraft bedrock add-ons again | 2025 - Now</p>
                                <p className=" bg-gradient-to-r bg-clip-text text-transparent from-lime-300 to-yellow-400 p-2 font-bold">Learn about lowpolygon model | Now</p>
                            </section>
                        </div>
                    </div>
                </motion.div>
                <div className=" w-full h-0.5 bg-[#464646]"/>
                <section className=" flex flex-col gap-4 justify-center justify-items-center items-center not-sm:w-56">
                    <h1 className=" mt-6 text-2xl not-sm:text-md">My current project: <span className="not-sm:text-sm bg-gradient-to-r bg-clip-text text-transparent from-lime-300 to-yellow-400 p-2 font-bold">CustomCrops Bedrock Add-on</span></h1>
                    <p className=" text-xl not-sm:hidden">Video</p>
                    <div className=" w-[32rem] not-sm:hidden h-80 bg-[#464646] rounded-lg text-center items-center content-center">
                        <p>Not Yet</p>
                    </div>
                </section>
                
          </div>
        </div>
    )
}