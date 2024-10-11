'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { useMediaQuery } from "react-responsive"
import { Stats } from "./Stats"

export function About() {
    // Media query to detect mobile devices
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    // UseInView hook to trigger animations based on visibility
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: !isMobile ? 0.5 : 0.1
    })

    return (
        <section id="#AboutUs" className="py-12 xl:pt-0 xl:pb-24 xl:mt-[40px]" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-16">
                    {/* Motion wrapper for image with fade-in animation */}
                    <motion.div 
                        variants={fadeIn('right', 0.2)} 
                        initial="hidden" 
                        animate={inView ? 'show' : 'hidden'} 
                        className="flex-1 relative mb-10 xl:mb-0"
                    >
                        <Image 
                            src={'/about/img2.png'} 
                            width={559} 
                            height={721} 
                            alt="Sobre o Hotely" 
                            className="mx-auto xl:mx-0"
                        />
                    </motion.div>

                    {/* Motion wrapper for text and button */}
                    <motion.div 
                        variants={fadeIn('left', 0.5)} 
                        initial="hidden" 
                        animate={inView ? 'show' : 'hidden'} 
                        className="flex-1 xl:max-w-[470px]"
                    >
                        <div className="mb-[38px]">
                            <h2 className="h2 mb-6">Sobre o Hotely</h2>
                            <p className="mb-6">
                            Hotely é a sua plataforma ideal para encontrar hospedagens de alta qualidade em destinos exclusivos. Com uma ampla variedade de opções, garantimos conforto, praticidade e uma experiência inesquecível. Explore, reserve e aproveite ao máximo a sua estadia!
                            </p>
                            <div className="my-5 xl:my-10 min-h-[35px]">
                                {/* Stats only rendered when in view */}
                                { inView && <Stats /> }
                            </div>
                            <p className="mb-10">
                            Hotely oferece uma experiência única, conectando você aos melhores hotéis ao redor do mundo. Com opções que atendem a todas as suas necessidades, garantimos uma estadia confortável, segura e repleta de comodidades. Viaje com tranquilidade e aproveite cada momento.
                            </p>
                            <Button variant="accent">Saiba mais</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
