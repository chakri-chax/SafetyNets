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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Cloth Hangers">
                {/* Start Services Details*/}
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content*/}
                            <div className="col-xl-8">
                                <div className="services-details__content">

                                    <div className="services-details__content-img1">
                                        <img src="assets/images/services/services-details-img6.jpg" alt="Cloth Hangers" />
                                    </div>

                                    <div className="services-details__content-text1">
                                        <h2>Cloth Hangers</h2>
                                        <p className="text1">
                                            Our cloth hanger systems are designed to provide a smart, space-efficient,
                                            and hygienic solution for drying clothes. Perfect for balconies, utility areas,
                                            and indoor spaces, they enhance everyday convenience without clutter.
                                        </p>
                                        <p className="text2">
                                            Built using high-quality, rust-resistant materials, our cloth hangers ensure
                                            smooth operation, long-lasting durability, and a clean, modern appearance.
                                        </p>
                                    </div>

                                    <div className="services-details__content-img2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img2.jpg" alt="Cloth Hanger Installation" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img3.jpg" alt="Balcony Cloth Hangers" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__content-text2">
                                        <p className="text1">
                                            Each cloth hanger is custom-installed to suit your space, allowing maximum
                                            airflow and sunlight for faster drying. The design keeps clothes elevated,
                                            organized, and protected from dust and damage.
                                        </p>
                                        <h2>Service Quality</h2>
                                        <p className="text2">
                                            Our professional installation ensures smooth movement, proper load balance,
                                            and secure fittings for long-term everyday use.
                                        </p>
                                    </div>

                                    <div className="services-details__content-text3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-img">
                                                    <img src="assets/images/services/services-details-img4.jpg" alt="Premium Cloth Hangers" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-list">
                                                    <ul>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Rust-proof and durable materials</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Space-saving modern design</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Smooth and easy operation</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Suitable for indoor & outdoor use</p>
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
                                                        <h4>Where can cloth hangers be installed?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Cloth hangers can be installed in balconies, utility areas,
                                                                bathrooms, kitchens, and indoor drying spaces.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>Are the cloth hangers strong enough for daily use?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Yes. Our cloth hangers are designed to handle daily loads
                                                                with strong fittings and balanced weight distribution.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>Do cloth hangers require maintenance?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Minimal maintenance is required. Occasional cleaning
                                                                ensures smooth operation and long-lasting performance.
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