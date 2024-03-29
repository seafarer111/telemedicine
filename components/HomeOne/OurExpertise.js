import React from 'react';
import Link from 'next/link';

const OurExpertise = () => {
    return (
        <div className="expertise-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Expertise</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-doctor-alt"></i>
                                        <h3> 
                                            <Link href="/doctor-details">
                                                <a>Online Doctors</a>
                                            </Link>
                                        </h3>
                                        <p>Easiest way to see an online doctor 24/7 from the comfort of your home.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-stretcher"></i>
                                        <h3> 
                                            <Link href="/doctor-details">
                                                <a>Emergency</a>
                                            </Link>
                                        </h3>
                                        <p>Connects at a central hub emergency department to patients at spoke hospitals</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-network"></i>
                                        <h3> 
                                            <Link href="/doctor-details">
                                                <a>Technology</a>
                                            </Link>
                                        </h3>
                                        <p>Transform healthcare delivery through connected devices, Remote patient monitoring.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-ambulance-cross"></i>
                                        <h3> 
                                            <Link href="/doctor-details">
                                                <a>Ambulance</a>
                                            </Link>
                                        </h3>
                                        <p>Video consultation with audio capabilities, either before and/or during transport.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="expertise-right">
                                <picture><img src="/images/about4.jpg" alt="Expertise" /></picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertise;