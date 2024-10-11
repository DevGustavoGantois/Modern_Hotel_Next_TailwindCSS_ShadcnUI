'use client'

import Image from "next/image"
import Link from "next/link"
import { Socials } from "./Socials"

import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

export function Footer() {
    return (
        <footer id="#ContactUs" className="bg-soft_green-secondary relative pt-12 xl:pt-0">
            <div className="container mx-auto">
                <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0}}>
                    <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
                        <div className="xl:w-[470px] mb-6 xl:mb-0">
                            <Link href='/'>
                            <Image src='/footer/logo.svg' width={89} height={36} alt="" className="mb-2" />
                            </Link>
                            <p className="text-lg leading-9">
                                
Hotely é a sua plataforma confiável para reservas de hotéis ao redor do mundo. Oferecemos uma experiência de hospedagem personalizada, garantindo que cada estadia seja confortável e inesquecível. Seja para negócios ou lazer, encontramos o hotel ideal para você, com suporte dedicado e uma vasta seleção de acomodações para todas as necessidades e preferências.
                            </p>
                        </div>
                        <div className="flex xl:gap-x-16 xl:ml-32">
                            <div className="flex-1">
                                <h4 className="h4 mb-6">Navegação</h4>
                                <ul className="flex flex-col gap-y-6 text-lg">
                                    <li>
                                        <Link href='#Home'>Home</Link>
                                    </li>
                                    <li>
                                        <Link href='#FindHotel'>Escolher Hotel</Link>
                                    </li>
                                    <li>
                                        <Link href='#AboutUs'>Sobre</Link>
                                    </li>
                                    <li>
                                        <Link href='#ContactUs'>Contato</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h4 className="h4 mb-6">Contate nos</h4>
                                <ul className="flex flex-col gap-y-6 text-lg">
                                    <li>
                                        +55 71 99467-87234
                                    </li>
                                    <li>
                                        gugagantoisdev@gmail.com
                                    </li>
                                    <li>
                                        hotely.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
                    <p className="text-black text-center font-semibold mb-4 xl:mb-0">Copyright &copy; 2024. Todos os direitos Reservados.</p>
                    <Socials containerStyles='flex gap-x-4 text-black mx-auto xl:mx-0' />
                </div>
                <div>
                    <p className="text-center text-black hover:text-soft_green duration-300 transition-all"><a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target="_blank">Desenvolvido por @devgustavogantois_</a></p>
                </div>
            </div>            
        </footer>
    )
}