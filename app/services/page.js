'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our services">
                {/* Start Services One*/}
                <section className="services-one services-one--services">
                    <div className="container">
                        <div className="row">
                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
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
                                            <img src="assets/images/services/services-v1-img1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}

                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
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
                                            <img src="assets/images/services/services-v1-img2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}

                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
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
                                            <img src="assets/images/services/services-v1-img3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}

                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
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
                                            <img src="assets/images/services/services-v1-img5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}

                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="services-one__single">
                                    <div className="icon-box">
                                        <span className="icon-construction-2"></span>
                                    </div>
                                    <div className="services-one__single-inner">
                                        <div className="services-one__single-content">
                                            <h3><Link href="structural-mastery">Cricket Nets</Link></h3>
                                            <p>High-strength cricket nets designed to withstand powerful shots and continuous practice sessions. Ideal for grounds, academies, and open spaces, ensuring safety and durability.</p>
                                        </div>

                                        <div className="services-one__single-img">
                                            <img src="assets/images/services/services-v1-img6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}

                            {/* Start Services One Single*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="services-one__single">
                                    <div className="icon-box">
                                        <span className="icon-interior-design"></span>
                                    </div>
                                    <div className="services-one__single-inner">
                                        <div className="services-one__single-content">
                                            <h3><Link href="structural-mastery">Coconut Safety Nets</Link></h3>
                                            <p>Strong and reliable safety nets installed to prevent falling coconuts and protect people, vehicles, and property. Built to handle heavy impact while blending seamlessly into the surroundings.</p>
                                        </div>

                                        <div className="services-one__single-img">
                                            <img src="assets/images/services/services-v1-img7.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single*/}
                        </div>
                    </div>
                </section>
                {/* End Services One*/}
            </Layout>
        </>
    )
}