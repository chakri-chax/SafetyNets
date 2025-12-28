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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Monkey Nets">
                {/* Start Services Details*/}
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content*/}
                            <div className="col-xl-8">
                                <div className="services-details__content">

                                    <div className="services-details__content-img1">
                                        <img src="assets/images/services/services-details-img7.jpg" alt="Monkey Nets" />
                                    </div>

                                    <div className="services-details__content-text1">
                                        <h2>Monkey Nets</h2>
                                        <p className="text1">
                                            Monkey Nets are designed to protect homes and buildings from monkey intrusion
                                            without causing harm. They create a strong, secure barrier while maintaining
                                            ventilation, visibility, and the natural appearance of the structure.
                                        </p>
                                        <p className="text2">
                                            Our nets are made from high-strength, weather-resistant materials capable of
                                            withstanding pulling, climbing, and outdoor exposure for long-term protection.
                                        </p>
                                    </div>

                                    <div className="services-details__content-img2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img2.jpg" alt="Monkey Net Installation" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-img2-single">
                                                    <img src="assets/images/services/services-details-img3.jpg" alt="Balcony Monkey Nets" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__content-text2">
                                        <p className="text1">
                                            Each monkey net system is custom-fitted to balconies, windows, terraces,
                                            and open areas to ensure complete coverage. The installation is neat,
                                            secure, and designed to blend seamlessly with the building structure.
                                        </p>
                                        <h2>Service Quality</h2>
                                        <p className="text2">
                                            Our experienced team ensures firm anchoring, proper tension, and
                                            durable fittings to deliver long-lasting safety and reliability.
                                        </p>
                                    </div>

                                    <div className="services-details__content-text3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-img">
                                                    <img src="assets/images/services/services-details-img4.jpg" alt="Premium Monkey Nets" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="services-details__content-text3-list">
                                                    <ul>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Strong and tear-resistant netting</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Safe and non-harmful to animals</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Weather-resistant & UV-protected</p>
                                                        </li>
                                                        <li>
                                                            <p><span className="icon-verified"></span> Custom-fitted for all open areas</p>
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
                                                        <h4>Where can monkey nets be installed?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Monkey nets can be installed on balconies, windows,
                                                                terraces, rooftops, and other open areas of buildings.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>Are monkey nets safe for animals?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                Yes. Our monkey nets are designed to prevent entry
                                                                without harming animals, offering a humane solution.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>How durable are monkey nets?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>
                                                                They are highly durable, UV-resistant, and capable
                                                                of withstanding heavy pulling and outdoor conditions.
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