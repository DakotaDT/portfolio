"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return( 
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5lx lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Hello, Im{" "}</span>
                    <br></br>
                    <TypeAnimation 
                        sequence={[
                            "Caio",
                            1000,
                            "FullStack Dev",
                            1000,
                            "Web Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Im a developer FullStack, and creator of applications and solutions for my costumers!
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-400 via-primary-500 to-gray-400 hover:bg-slate-200 text-white">
                        Contact-me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-400 via-primary-500 to-gray-400 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}  
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[320px] h-[320px] lg:w-[330px] lg:h-[330px] relative">
                <Image 
                    src="/images/Imagem.png"
                    alt="Hero Image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    style={{borderRadius: 180}}
                />
                </div>
            </motion.div>
        </div>
    </section>
  )
}
