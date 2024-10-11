'use client'

import Image from "next/image"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const hotelData = [
    {
        image: '/find/hotel-1.png',
        name: 'Hotel De Luna',
        location: 'Singapura'
    },
    {
        image: '/find/hotel-2.png',
        name: 'Ina Tretes Hotel',
        location: 'Singapura'
    },
    {
        image: '/find/hotel-3.png',
        name: 'Delight Hotel',
        location: 'Singapura',   
    },
    {
        image: '/find/hotel-4.png',
        name: 'Mercusuar Hotel',
        location: 'Singapura'
    }
]

export function Find() {
    return (
        <section className="py-12 xl:py-36">
            <div className="container mx-auto">
                <div className="text-center">
                    <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}  className="h2 mb-6">Encontre o seu melhor hotel</motion.h2>
                    <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}  className="max-w-[638px] mx-auto mb-8">Descubra o lugar perfeito para sua estadia, com opções que atendem todas as suas necessidades. Nossos hotéis oferecem conforto, luxo e serviços excepcionais para tornar sua viagem inesquecível. Reserve agora e aproveite o melhor em hospitalidade, seja para uma viagem de lazer ou negócios.</motion.p>
                    <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} >
                        <Button variant="accent" className="px-12 mb-14 xl:mb-28">Ver todos</Button>
                    </motion.div>
                </div>
                <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}  className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
                    {hotelData.map((item, index) => {
                        return (
                            <div className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0" key={index}>
                                <Image src={item.image} width={270} height={270} alt="" />
                                <div className="p-6">
                                    <h4 className="h4 group-hover:text-white transition-all duration-300">{item.name}</h4>
                                    <p className="group-hover:text-white transition-all duration-300">{item.location}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}