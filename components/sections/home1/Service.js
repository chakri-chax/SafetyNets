'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 4,
            
        },
        1350: {
            slidesPerView: 4,
            
        },
    }



}
export default function Service() {
    return (
        <>


        {/* Start Services One*/} 
        <section className="services-one">
            <div className="shape1"><img src="assets/images/shapes/services-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>services</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">The Best Service For You</h2>
                </div>
                <Swiper {...swiperOptions} className="services-one__carousel owl-carousel owl-theme">

                    <SwiperSlide>
                    {/* Start Services One Single*/} 
                    <div className="services-one__single">
                        <div className="icon-box">
                            <span className="icon-building"></span>
                        </div>
                        <div className="services-one__single-inner">
                            <div className="services-one__single-content">
                                <h3><Link href="structural-mastery">Balcony Safety Nets</Link></h3>
                                <p>We offer a wide range of High-quality nets to prevent falls from balconies and terraces.</p>
                            </div>
                            <div className="services-one__single-img">
                                <img src="assets/images/services/services-v1-img1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 
                    </SwiperSlide>
                    <SwiperSlide>
                    {/* Start Services One Single*/} 
                    <div className="services-one__single">
                        <div className="icon-box">
                            <span className="icon-helmet"></span>
                        </div>
                        <div className="services-one__single-inner">
                            <div className="services-one__single-content">
                                <h3><Link href="structural-mastery">Invisible Grills</Link></h3>
                                <p>We offer a wide range of Transparent protection that doesn't obstruct your view.</p>
                            </div>
                            <div className="services-one__single-img">
                                <img src="assets/images/services/services-v1-img2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 
                    </SwiperSlide>
                    <SwiperSlide>
                    {/* Start Services One Single*/} 
                    <div className="services-one__single">
                        <div className="icon-box">
                            <span className="icon-home"></span>
                        </div>
                        <div className="services-one__single-inner">
                            <div className="services-one__single-content">
                                <h3><Link href="structural-mastery">Cloth Hangers</Link></h3>
                                <p>We offer a wide range of Durable and space-saving solutions for drying clothes.</p>
                            </div>

                            <div className="services-one__single-img">
                                <img src="assets/images/services/services-v1-img3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/}
                    </SwiperSlide>
                    <SwiperSlide> 
                    {/* Start Services One Single*/} 
                    <div className="services-one__single">
                        <div className="icon-box">
                            <span className="icon-architect"></span>
                        </div>
                        <div className="services-one__single-inner">
                            <div className="services-one__single-content">
                                <h3><Link href="structural-mastery">Monkey Nets</Link></h3>
                                <p>We offer a wide range of Protection nets to keep your fruits and property from monkeys and birds.</p>
                            </div>
                            <div className="services-one__single-img">
                                <img src="assets/images/services/services-v1-img4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 
                    </SwiperSlide>
                   
                  
                   
                </Swiper>
            </div>
        </section>
        {/* End Services One*/} 

    
        </>
    )
}
