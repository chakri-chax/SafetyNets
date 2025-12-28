'use client'
import { useState } from "react"
export default function Working() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <>
        {/* Start Working Process One*/} 
        <section className="working-process-one">
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
                                            <img src="assets/images/resources/working-process-v1-img1.jpg" alt=""/>
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
                                            <img src="assets/images/resources/working-process-v1-img2.jpg" alt=""/>
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
                                            <img src="assets/images/resources/working-process-v1-img3.jpg" alt=""/>
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
                                            <img src="assets/images/resources/working-process-v1-img4.jpg" alt=""/>
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
        
            
        </>
    )
}
