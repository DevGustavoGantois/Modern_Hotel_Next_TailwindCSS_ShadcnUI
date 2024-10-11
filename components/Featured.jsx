'use client' 

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export function Featured() {
    return (
        <motion.section 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.2 }}  
            className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[40px] xl:px-[80px] py-[40px] xl:py-[60px]"
        >
            <div className="flex flex-col xl:flex-row items-center h-full gap-y-6 xl:gap-x-[30px] text-center xl:text-left">
                <Image 
                    className="xl:mr-[50px]" 
                    src='/featured/icon.svg' 
                    width={73} 
                    height={84} 
                    alt="Icone destaque" 
                    priority 
                />
                <h2 className="h2 flex-1 text-soft_green leading-relaxed">
                    Reserve um quarto incrível em menos de 1 minuto.
                </h2>
                <p className="flex-1 text-soft_green leading-loose max-w-[600px] xl:max-w-none">
                    As melhores acomodações estão aqui no nosso site! Reserve seu quarto agora e surpreenda-se com a nossa qualidade e excelência.
                </p>
            </div>
        </motion.section>
    );
}
