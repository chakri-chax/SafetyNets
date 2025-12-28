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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Invisible Grills">
                {/* Start Services Details*/}
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content*/}
                            <div className="col-xl-8">
                                <div className="services-details__content">

                                    <div className="services-details__content-img1">
                                        <img src="assets/images/services/services-details-img5.jpg" alt="Invisible Grills" />
                                    </div>

                                    <div className="services-details__content-text1">
                                        <h2>Invisible Grills</h2>
                                        <p className="text1">
                                            Invisible Grills offer advanced safety without compromising aesthetics, airflow, or visibility.
                                            Designed for modern homes and high-rise buildings, they provide reliable protection for children,
                                            pets, and families while maintaining an open and elegant appearance.
                                        </p>
                                        <p className="text2">
                                            Manufactured using high-tensile, corrosion-resistant stainless steel cables, our invisible grills
                                            are built to withstand impact, weather conditions, and long-term usage with minimal maintenance.
                                        </p>
                                    </div>

                                    <div className="services-details__content-img2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img2.jpg" alt="Invisible Grill Installation" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img3.jpg" alt="Balcony Invisible Grills" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__content-text2">
                                        <p className="text1">
                                            Each invisible grill system is custom-designed to fit the exact dimensions of your space,
                                            ensuring a seamless and minimal finish. Our solutions preserve natural light and ventilation
                                            while delivering uncompromised safety for residential and commercial environments.
                                        </p>
                                        <h2>Service Quality</h2>
                                        <p className="text2">
                                            Our expert technicians follow strict safety standards and precision installation methods,
                                            ensuring durability, structural stability, and long-lasting performance.
                                        </p>
                                    </div>

                                    <div className="services-details__content-text3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-img">
                                                    <img src="assets/images/services/services-details-img4.jpg" alt="Premium Invisible Grills" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-list">
                                                    <ul>
                                                        <li>
                                                            <p><span className="icon-verified"></span> High-tensile stainless steel cables</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Child & pet safety certified</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Weather-resistant & rust-proof</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Minimal design with maximum protection</p>
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
                                                        <h4>Where can invisible grills be installed?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Invisible grills can be installed on balconies, windows, staircases,
                                                                duct areas, and open spaces in both residential and commercial buildings.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>What makes invisible grills better than traditional grills?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Invisible grills provide the same level of safety while preserving visibility,
                                                                airflow, and modern aesthetics, making them ideal for contemporary spaces.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>Are invisible grills strong and durable?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Yes. Our invisible grills are made from high-strength stainless steel cables
                                                                designed to withstand pressure, impact, and extreme weather conditions.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Details Content*/}

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
                            {/* End Sidebar*/}
                        </div>
                    </div>
                </section>
                {/* End Services Details*/}

            </Layout>
        </>
    )
}