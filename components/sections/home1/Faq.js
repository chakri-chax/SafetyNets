'use client'
import { useState } from 'react'
export default function Faq() {
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
        {/* Start Faq One*/} 
        <section className="faq-one">
            <div className="shape1"><img src="assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/shapes/faq-v1-shape2.png" alt=""/></div>
            <div className="shape3"><img src="assets/images/shapes/faq-v1-shape3.png" alt=""/></div>
            <div className="shape4 float-bob-x"><img src="assets/images/shapes/faq-v1-shape4.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__faq">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>FAQ</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Frequently asked <br/> Question </h2>
                            </div>

                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What types of safety net projects do you handle?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We install safety nets for balconies, windows, staircases, terraces, open areas, and children’s play spaces. Our solutions are suitable for homes, apartments, schools, and commercial buildings.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>What sets your company apart from others?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We use premium-quality, UV-resistant materials, provide custom sizing for every space, and ensure professional installation. Our focus on safety, durability, and customer satisfaction makes us different.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Are the safety nets durable and weather-resistant?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes. Our safety nets are made from high-strength nylon that is tear-resistant, weatherproof, and UV-protected, ensuring long-term safety and reliability even in harsh outdoor conditions.</p>
                                        </div>
                                    </div>
                                </div>
{/* 
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How to do Interior step by step?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 

                    {/* Start Faq One Img*/} 
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__img">

                            <ul className="faq-one__img-list1">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img2.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>

                            <ul className="faq-one__img-list2">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img3.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img4.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Faq One Img*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 
        
            
        </>
    )
}
