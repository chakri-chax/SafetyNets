'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Faq">
            

        {/* Start Faq One*/} 
        <section className="faq-one faq-one--faq">
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-12">
                        <div className="faq-one__faq">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What is the process for buying a home?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>What is the role of a real estate agent?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What types of construction projects do you handle?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How to do Interior step by step?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4>What sets your company apart from others?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                    <div className="accrodion-title">
                                        <h4>Are your cleaning products safe for pets and children?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                    <div className="accrodion-title">
                                        <h4>How to do Interior step by step?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Real estate agents act as intermediaries between the buyers and sellers,
                                                helping with property transactions negotiations, and paperwork. It is a
                                                long established fact that a reader will be distracted by the readable
                                                content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 

            </Layout>
        </>
    )
}