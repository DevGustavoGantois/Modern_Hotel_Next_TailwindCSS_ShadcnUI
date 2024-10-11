'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const testimonialData = [
    {
        img: '/testimonials/img-1.png',
        message: '"A minha estadia em Singapura foi fantástica! O hotel que reservei pelo Hotely superou minhas expectativas. Localizado em uma área central, tive fácil acesso aos principais pontos turísticos da cidade. O atendimento foi excelente, e as acomodações eram modernas e confortáveis. Uma experiência inesquecível!"',
        personName: 'Roberto Silva',
        location: 'Singapura',
    },
    {
        img: '/testimonials/img-2.png',
        message: '"Reservar pelo Hotely foi a melhor escolha que fiz para minha viagem a Singapura. O hotel era impecável, com uma vista incrível da cidade e um serviço de primeira. Tudo funcionou perfeitamente, desde o processo de reserva até o check-in. Sem dúvidas, recomendo a todos que queiram uma experiência tranquila e sofisticada!"',
        personName: 'José Otávio',
        location: 'Singapura',
    },
]


export function Testimonials() {
    return (
        <motion.section variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0}} className="bg-soft_green xl:h-[880px]">
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0}} className="container mx-auto">
            <Swiper
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    className="xl:h-[680px] overflow-hidden"
                >
                    {testimonialData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                                <Image src={item.img} width={470} height={470} quality={100} alt="" className="hidden xl:flex" />
                                <div className="flex-1 bg-white/20 text-white p-12">
                                    <p className="text-lg leading-9 mb-8">{item.message}</p>
                                    <p className="text-xl font-bold">{item.personName}</p>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
            </motion.div>
        </motion.section>
    )
}