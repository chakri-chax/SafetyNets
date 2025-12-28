'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">

                {/* Start About Two*/}
                <section className="about-two">
                    <div className="container">
                        <div className="row">
                            {/* Start About Two Left*/}
                            <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                                <div className="about-two__left">
                                    <div className="about-two__left-img">
                                        <img src="assets/images/about/about-v2-img1.jpg" alt="" />
                                    </div>

                                    {/* <div className="about-two__left-bottom">
                                <div className="about-two__left-bottom-img">
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img2.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img3.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v1-img4.png" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box style2">
                                                <img src="assets/images/testimonial/testimonial-v1-img5.png" alt=""/>
                                                <div className="icon-box">
                                                    <Link href="#"><span className="icon-plus-1"></span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="about-two__left-bottom-text count-box">
                                    <h3>We have <span className="count-text" data-stop="2563" data-speed="1500">00</span>+
                                        Global <br/>
                                        Active Clients</h3>
                                </div>
                            </div> */}
                                </div>
                            </div>
                            {/* End About Two Left*/}

                            {/* Start About Two Middle*/}
                            <div className="col-xl-5 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="about-two__middle">
                                    <div className="sec-title tg-heading-subheading animation-style2">
                                        <div className="sec-title__tagline">
                                            <div className="left-line"></div>
                                            <div className="text tg-element-title">
                                                <h4>About us</h4>
                                            </div>
                                        </div>
                                        <h2 className="sec-title__title tg-element-title">The timeline varies <br /> based on project
                                            <br /> scope
                                            complexity</h2>
                                    </div>

                                    <div className="about-two__middle-text">
                                        <p>At NSP, we believe true safety should be powerful yet invisible. Our solutions are designed to protect lives without compromising openness, aesthetics, or comfort. With a strong focus on quality, precision, and long-term reliability, we deliver safety systems that blend seamlessly into modern living spaces. </p>
                                    </div>

                                    {/* <div className="about-two__middle-text2">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-house"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Rental property <br/> management</h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-engineer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Interior design <br/> and staging</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                                    <div className="about-two__middle-btn">
                                        <Link className="thm-btn" href="#">Read more
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Start About Two Middle*/}

                            {/* Start About Two Right*/}
                            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="about-two__right">
                                    <div className="about-two__right-text">
                                        <p>Every project is executed using strong, durable, and weather-resistant materials, engineered to provide dependable protection for families, children, and pets. Our safety solutions are custom-made to perfectly fit each space, ensuring a clean finish and maximum effectiveness.
                                        </p>
                                    </div>

                                    <div className="about-two__right-img">
                                        <img src="assets/images/about/about-v2-img2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* End About Two Right*/}
                        </div>
                    </div>
                </section>
                {/* End About Two*/}

                {/* Start Why Choose One*/}
                <section className="why-choose-one">
                    <div className="why-choose-one__bg"
                        style={{ backgroundImage: ' url(assets/images/resources/why-choose-v1-bg.jpg)' }}></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                    <div className="shape6"></div>
                    <div className="shape7"></div>
                    <div className="shape8"></div>
                    <div className="shape9"></div>
                    <div className="shape10 float-bob-y"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt="" /></div>
                    <div className="container clearfix">
                        <div className="why-choose-one__inner">
                            <div className="why-choose-one__content">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="left-line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Why Choose NSP Invisible grills & Safety Nets?</h4>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Find Your Perfect Space We <br /> Make It Home Safe
                                    </h2>
                                </div>

                                <div className="why-choose-one__content-text">
                                    <p>We deliver premium-quality safety nets crafted for long-term durability and everyday protection.
                                        Our solutions are affordably priced without compromising on safety, strength, or finish.
                                        With fast, secure installation and a trusted 10-year warranty, we ensure complete peace of mind.</p>
                                </div>

                                <div className="why-choose-one__content-bottom">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                            data-wow-duration="1500ms">
                                            <div className="why-choose-one__content-single">
                                                <div className="icon-box">
                                                    <span className="icon-raw-materials"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Using Qualityfull <br /> Materials</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                            data-wow-duration="1500ms">
                                            <div className="why-choose-one__content-single">
                                                <div className="icon-box">
                                                    <span className="icon-support"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Quickly Finished <br /> your work</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                            data-wow-duration="1500ms">
                                            <div className="why-choose-one__content-single">
                                                <div className="icon-box">
                                                    <span className="icon-income"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Affordable Pricing <br /> your Work</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                            data-wow-duration="1500ms">
                                            <div className="why-choose-one__content-single">
                                                <div className="icon-box">
                                                    <span className="icon-costumer"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Clients Satisfaction <br /> Guarantees</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Why Choose One*/}

                {/* Start Working Process One*/}
                <section className="working-process-one working-process-one--about">
                    <div className="container">
                        <div className="sec-title center text-center tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="left-line"></div>
                                <div className="text tg-element-title">
                                    <h4>who to work</h4>
                                </div>
                                <div className="right-line"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Standard Working Process</h2>
                        </div>

                        <div className="working-process-one__inner">

                            <div className="shape1 animation-infinite1"
                                style={{ backgroundImage: ' url(assets/images/shapes/working-process-v1-shape1.png)' }}></div>

                            <div className="working-process-one__tab-box tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                        <h2>01</h2>
                                    </li>
                                    <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                        <h2>02</h2>
                                    </li>
                                    <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                        <h2>03</h2>
                                    </li>
                                    <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                        <h2>04</h2>
                                    </li>
                                </ul>

                                <div className="tabs-content">
                                    {/* Start Single Tab Content*/}
                                    <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="working-process-one__single-tab">
                                            <div className="working-process-one__single-tab-inner">
                                                <div className="content-box">
                                                    <h2>Planning & Design</h2>
                                                    <p>Accurate site inspection and measurements are done to create a custom safety solution that fits perfectly without compromising aesthetics.</p>

                                                </div>

                                                <div className="img-box">
                                                    <img src="assets/images/resources/working-process-v1-img1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Tab Content*/}

                                    {/* Start Single Tab Content*/}
                                    <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="working-process-one__single-tab">
                                            <div className="working-process-one__single-tab-inner">
                                                <div className="content-box">
                                                    <h2>Material Selection</h2>
                                                    <p>Premium, UV-resistant materials are chosen to ensure long-lasting strength, durability, and reliable protection in all conditions.</p>
                                                </div>

                                                <div className="img-box">
                                                    <img src="assets/images/resources/working-process-v1-img2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Tab Content*/}

                                    {/* Start Single Tab Content*/}
                                    <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="working-process-one__single-tab">
                                            <div className="working-process-one__single-tab-inner">
                                                <div className="content-box">
                                            <h2>Professional Installation</h2>
                                            <p>Expert technicians securely install and tension the safety net for maximum safety while maintaining airflow and visibility.</p>
                                        </div>

                                                <div className="img-box">
                                                    <img src="assets/images/resources/working-process-v1-img3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Tab Content*/}

                                    {/* Start Single Tab Content*/}
                                    <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="working-process-one__single-tab">
                                            <div className="working-process-one__single-tab-inner">
                                                <div className="content-box">
                                            <h2>Final Touches</h2>
                                            <p>A complete safety check and clean finish ensure the installation is secure, neat, and ready for everyday use.</p>
                                        </div>

                                                <div className="img-box">
                                                    <img src="assets/images/resources/working-process-v1-img4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Tab Content*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Working Process One*/}

                {/* Start Team Two*/}
              
                {/* End Team Two*/}
            </Layout>
        </>
    )
}


