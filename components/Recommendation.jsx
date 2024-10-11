'use client'

//swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//swiper modules
import { Autoplay } from 'swiper/modules';
//swiper styles 
import 'swiper/css';

//components
import { Button } from './ui/button';
import Image from 'next/image';

//import motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const recommendationsData = [
    {
        name: 'Shanghai Hotel',
        image: '/recommendation/hotel-1.png',
        location: 'Shanghai, China',
        description: 'Uma metrópole vibrante que mistura tradição e modernidade, com arranha-céus imponentes e jardins históricos. Shanghai é o destino perfeito para quem busca cultura, inovação e gastronomia diversificada.',
        price: 40,
        testimonial: {
            message: '"Reservar pelo Hotely foi a melhor escolha para minha viagem a Shanghai! O hotel era impecável, com uma vista incrível da cidade e um atendimento impecável. Tudo foi muito fácil e rápido, desde a reserva até o check-in. Voltarei com certeza!"',
            personName: 'Roberto Silva'
        }
    },
    {
        name: 'Chalé dos Picos',
        image: '/recommendation/hotel-2.png',
        location: 'Aspen, EUA',
        description: 'Um paraíso para os amantes de esportes de inverno e natureza. Aspen é conhecida por suas montanhas cobertas de neve, luxuosos chalés e paisagens deslumbrantes, proporcionando uma experiência única de tranquilidade e aventura.',
        price: 80,
        testimonial: {
            message: '"Minha experiência em Aspen foi inesquecível, graças ao Hotely! O chalé que reservei era maravilhoso, perfeito para aproveitar o frio com conforto e luxo. A praticidade da plataforma foi surpreendente, e o atendimento do hotel superou minhas expectativas. Recomendadíssimo!"',
            personName: 'José Otávio'
        }
    },
    {
        name: 'Resort Tropical Oásis',
        image: '/recommendation/hotel-3.png',
        location: 'Bali, Indonésia',
        description: 'Ilha paradisíaca com praias exóticas, templos encantadores e uma cultura rica. Bali é o destino dos sonhos para quem busca relaxamento em meio à natureza tropical, resorts luxuosos e um clima acolhedor.',
        price: 200,
        testimonial: {
            message: '"Bali já é um paraíso por si só, mas o resort que encontrei no Hotely fez minha viagem ainda mais especial. A reserva foi super fácil, e o resort era um verdadeiro oásis. Pude relaxar sabendo que tudo estava organizado. Adorei a experiência e vou reservar pelo Hotely nas minhas próximas viagens!"',
            personName: 'Maria Antunes'
        }
    }
]

export function Recommendation() {
    return (
        <motion.section id='#FindHotel'
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0 }} 
            className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
        >
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }}>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                >
                    {recommendationsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                                <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                                    <h2 className="h2 mb-4">{item.name}</h2>
                                    <p className="text-soft_green text-sm mb-6">{item.location}</p>
                                    <p className="mb-[60px]">{item.description}</p>
                                    <div className="flex items-center gap-x-[50px]">
                                        <Button variant="accent" className="px-[44px]">Ver agora</Button>
                                        <div className="text-black">
                                            <span className="font-bold text-2xl">{item.price}</span>
                                            <span className="text-sm">/Noite</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                                    <div>
                                        <Image src={item.image} width={905} height={528} quality={100} alt='' className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]" />
                                        <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                                            <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">{item.testimonial.message}</p>
                                            <p className="text-xl font-bold">{item.testimonial.personName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
            <Image 
                src={'/recommendation/pattern.svg'} 
                width={240} 
                height={240} 
                alt='' 
                className="hidden xl:flex absolute left-[135px] -bottom-[120px]" 
            />            
        </motion.section>
    )
}
