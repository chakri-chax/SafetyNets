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
export default function Testimonial() {
    return (
        <>

            {/* Start Testimonial One*/}
            <section className="testimonial-one clearfix">
                <div className="container">
                    <div className="row">
                        {/* Start Testimonial One Left*/}
                        <div className="col-xl-4">
                            <div className="testimonial-one__left">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="left-line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Why Choose NSP Invisible grills & Safety Nets?</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-one__content-text2">
                                    <ul className="about-one__content-list">
                                        <li>
                                            <p>Premium Quality</p>
                                        </li>
                                        <li>
                                            <p>Affordable Prices</p>

                                        </li>
                                        <li>
                                            <p>Fast, safe, and reliable installation</p>
                                        </li>
                                        <li>
                                            <p>10 Year Warranty</p>
                                        </li>
                                    </ul>


                                    {/* <div className="about-one__content-author">
                                    <div className="img-box">
                                        <img src="assets/images/about/about-v1-img3.png" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <div className="signature">
                                            <img src="assets/images/about/about-v1-signature.png" alt=""/>
                                        </div>
                                        <h2>Brooklyn Simmons</h2>
                                        <p>Co-Founder</p>

                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        {/* End Testimonial One Left*/}

                        {/* Start Testimonial One Right*/}
                        <div className="col-xl-8">
                            <div className="testimonial-one__right">
                                <Swiper {...swiperOptions} className="testimonial-one__carousel ">
                                    <SwiperSlide>
                                        {/* Start Testimonial One Single*/}
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__single-text">
                                                <p>We deliver premium-quality safety nets crafted for long-term durability and everyday protection.
                                                    Our solutions are affordably priced without compromising on safety, strength, or finish.
                                                    With fast, secure installation and a trusted 10-year warranty, we ensure complete peace of mind.</p>
                                            </div>

                                            {/* <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png" alt="" />
                                                    </div>
                                                    <div className="icon">
                                                        <span className="icon-right-quotation-mark"></span>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <div className="rating-box">
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                    </div>
                                                    <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* End Testimonial One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Testimonial One Single*/}
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__single-text">
                                                <p>We deliver premium-quality safety nets crafted for long-term durability and everyday protection.
                                                    Our solutions are affordably priced without compromising on safety, strength, or finish.
                                                    With fast, secure installation and a trusted 10-year warranty, we ensure complete peace of mind.</p>
                                            </div>

                                            <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png" alt="" />
                                                    </div>
                                                    <div className="icon">
                                                        <span className="icon-right-quotation-mark"></span>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <div className="rating-box">
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                    </div>
                                                    {/* <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonial One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Testimonial One Single*/}
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__single-text">
                                                <p>We deliver premium-quality safety nets crafted for long-term durability and everyday protection.
                                                    Our solutions are affordably priced without compromising on safety, strength, or finish.
                                                    With fast, secure installation and a trusted 10-year warranty, we ensure complete peace of mind.</p>
                                            </div>

                                            <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png" alt="" />
                                                    </div>
                                                    <div className="icon">
                                                        <span className="icon-right-quotation-mark"></span>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <div className="rating-box">
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                        <Link href="#"><i className="icon-star1"></i></Link>
                                                    </div>
                                                    {/* <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonial One Single*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        {/* End Testimonial One Right*/}
                    </div>
                </div>
            </section>
            {/* End Testimonial One*/}

        </>
    )
}
