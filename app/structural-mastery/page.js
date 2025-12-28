'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Balcony Safety Nets">
                {/* Start Services Details*/}
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content*/}
                            <div className="col-xl-8">
                                <div className="services-details__content">
                                    

                                    <div className="services-details__content-text1">
                                        <h2>Balcony Safety Nets</h2>
                                        <p className="text1">Our safety nets are designed for balconies, staircases, and open areas, ensuring protection for kids, pets, and adults. Made from UV-resistant nylon, they last for years.</p>
                                        <p className="text2">Made from strong, UV-resistant nylon, these nets are built to last for years, even in outdoor conditions. They are tear-resistant, carefully fitted to your space, and installed securely for complete peace of mind. </p>
                                    </div>

                                    <div className="services-details__content-img2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img2.jpg" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__content-text2">
                                       
                                        <h2>Service Quality</h2>
                                        <p className="text2">Safety is our top priority. These nets act as a strong protective barrier without blocking airflow or sunlight. They help prevent accidents, give parents peace of mind, allow pets to move freely, and make balconies safer for everyday use. Each installation is done carefully to ensure maximum strength, stability, and long-lasting protection for your home.</p>
                                    </div>

                                    <div className="services-details__content-text3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-img">
                                                    <img src="assets/images/services/services-details-img4.jpg" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-list">
                                                    <ul>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Strong and durable safety material</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Custom-made to fit your balcony perfectly</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Fast, safe, and reliable installation</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__accrodion">
                                        <div className="faq-one__faq">
                                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                    <div className="accrodion-title">
                                                        <h4>What types of safety net projects do you handle?</h4>
                                                    </div>

                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>We install safety nets for balconies, windows, staircases, terraces, open areas, and children’s play spaces. Our solutions are suitable for homes, apartments, schools, and commercial buildings.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>What sets your company apart from others?</h4>
                                                    </div>

                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>We use premium-quality, UV-resistant materials, provide custom sizing for every space, and ensure professional installation. Our focus on safety, durability, and customer satisfaction makes us different.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>Are the safety nets durable and weather-resistant?</h4>
                                                    </div>

                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Yes. Our safety nets are made from high-strength nylon that is tear-resistant, weatherproof, and UV-protected, ensuring long-term safety and reliability even in harsh outdoor conditions.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="sidebar">
                                    {/* Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                        <div className="title-box">
                                            <h2>All Services</h2>
                                        </div>

                                        <ul className="sidebar__services-list">
                                            <li className="active"><Link href="#">Balcony Safety Nets <span
                                                className="icon-right-arrow"></span></Link></li>
                                            <li><Link href="foundation-forte">Invisible Grills
                                                <span className="icon-right-arrow"></span></Link></li>
                                            <li><Link href="smart-solutions">Cloth Hangers <span
                                                className="icon-right-arrow"></span></Link>
                                            </li>
                                            <li><Link href="precision-builds">Monkey Nets <span
                                                className="icon-right-arrow"></span></Link>
                                            </li>
                                            <li><Link href="apex-remodeling">Cricket Nets <span
                                                className="icon-right-arrow"></span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                   
                                    <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
                                        <div className="sidebar__emergency-services-inner text-center">
                                            <div className="title">
                                                <h2>Safety Net Services</h2>
                                            </div>

                                            <div className="icon-box">
                                                <span className="icon-old-typical-phone"></span>
                                            </div>

                                            <div className="number-box">
                                                <p>Requesting A Call</p>
                                                <h3><Link href="tel:9182423372">(+91) 9182423372</Link></h3>
                                            </div>

                                            <div className="text-box">
                                                <p>Yes, we offer free estimates for all potential projects. Contact us to
                                                    schedule a
                                                    consultation.</p>
                                            </div>

                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">Read more
                                                    <i className="icon-next"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}