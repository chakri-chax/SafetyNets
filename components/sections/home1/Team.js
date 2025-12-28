'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
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
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Team() {
    return (
        <>

        {/* Start Team One*/} 
        <section className="team-one">
            <div className="container">
                <div className="row">
                    {/* Start Team One Left*/} 
                    <div className="col-xl-6">
                        <div className="team-one__left">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Great Team</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Meet Our Experience Team</h2>
                            </div>

                            <div className="team-one__left-text">
                                <p>We adhere to strict quality control measures and use high-quality materials. Our
                                    experienced team ensures every detail meets our high standards any kinds Students
                                    friends</p>
                            </div>

                            
                        </div>
                    </div>
                    {/* End Team One Left*/} 


                    {/* Start Team One Right*/} 
                    <div className="col-xl-6">
                        <div className="team-one__right">
                            <div className="swiper-container" id="team-one__carousel">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                    {/* Start Swiper Slide*/} 
                                    <div className="swiper-slide">
                                        <div className="team-one__right-single text-center">
                                            <div className="img-box">
                                                <img src="assets/images/team/team-v1-img1.png" alt=""/>
                                            </div>
                                            <div className="team-one__right-single-inner">

                                                <div className="author-box">
                                                    <h2>Ralph Edwards</h2>
                                                    <p>Junior Worker</p>
                                                </div>

                                                <div className="text-box">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the
                                                        1500s, when an unknown printer took a galley of type and
                                                        scrambled it to
                                                        make a type specimen book.</p>
                                                </div>

                                                <div className="social-links">
                                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#FF5E14" opacity="1"
                                                    d="M0,64L26.7,74.7C53.3,85,107,107,160,117.3C213.3,128,267,128,320,138.7C373.3,149,427,171,480,154.7C533.3,139,587,85,640,74.7C693.3,64,747,96,800,101.3C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,160C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* End Swiper Slide*/} 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Swiper Slide*/} 
                                    <div className="swiper-slide">
                                        <div className="team-one__right-single text-center">
                                            <div className="img-box">
                                                <img src="assets/images/team/team-v1-img2.png" alt=""/>
                                            </div>
                                            <div className="team-one__right-single-inner">

                                                <div className="author-box">
                                                    <h2>Ralph Edwards</h2>
                                                    <p>Junior Worker</p>
                                                </div>

                                                <div className="text-box">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the
                                                        1500s, when an unknown printer took a galley of type and
                                                        scrambled it to
                                                        make a type specimen book.</p>
                                                </div>

                                                <div className="social-links">
                                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#FF5E14" opacity="1"
                                                    d="M0,64L26.7,74.7C53.3,85,107,107,160,117.3C213.3,128,267,128,320,138.7C373.3,149,427,171,480,154.7C533.3,139,587,85,640,74.7C693.3,64,747,96,800,101.3C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,160C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* End Swiper Slide*/} 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Swiper Slide*/} 
                                    <div className="swiper-slide">
                                        <div className="team-one__right-single text-center">
                                            <div className="img-box">
                                                <img src="assets/images/team/team-v1-img3.png" alt=""/>
                                            </div>
                                            <div className="team-one__right-single-inner">

                                                <div className="author-box">
                                                    <h2>Ralph Edwards</h2>
                                                    <p>Junior Worker</p>
                                                </div>

                                                <div className="text-box">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the
                                                        1500s, when an unknown printer took a galley of type and
                                                        scrambled it to
                                                        make a type specimen book.</p>
                                                </div>

                                                <div className="social-links">
                                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#FF5E14" opacity="1"
                                                    d="M0,64L26.7,74.7C53.3,85,107,107,160,117.3C213.3,128,267,128,320,138.7C373.3,149,427,171,480,154.7C533.3,139,587,85,640,74.7C693.3,64,747,96,800,101.3C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,160C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* End Swiper Slide*/} 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Swiper Slide*/} 
                                    <div className="swiper-slide">
                                        <div className="team-one__right-single text-center">
                                            <div className="img-box">
                                                <img src="assets/images/team/team-v1-img4.png" alt=""/>
                                            </div>
                                            <div className="team-one__right-single-inner">

                                                <div className="author-box">
                                                    <h2>Ralph Edwards</h2>
                                                    <p>Junior Worker</p>
                                                </div>

                                                <div className="text-box">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the
                                                        1500s, when an unknown printer took a galley of type and
                                                        scrambled it to
                                                        make a type specimen book.</p>
                                                </div>

                                                <div className="social-links">
                                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#FF5E14" opacity="1"
                                                    d="M0,64L26.7,74.7C53.3,85,107,107,160,117.3C213.3,128,267,128,320,138.7C373.3,149,427,171,480,154.7C533.3,139,587,85,640,74.7C693.3,64,747,96,800,101.3C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,160C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {/* End Swiper Slide*/} 
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* End Team One Right*/} 
                </div>
            </div>
        </section>
        {/* End Team One*/} 
        
            
        </>
    )
}
