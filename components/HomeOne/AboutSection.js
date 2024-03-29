import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <div className="about-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-item">
                            <div className="about-left">
                                <picture><img src="/images/about1.jpg" alt="About" /></picture>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-item about-right">
                            <picture><img src="/images/about-shape1.png" alt="About" /></picture>
                            <h2>About Our Telemedicine</h2>
                            <p className="text-justify">
                              In practice, what this means is that we will schedule a video visit. You’ll open an application that has been designed specifically for this purpose, on your smartphone, tablet or computer that has high-speed internet access and a camera. 
                              It’s basically a ‘remote’ medical consultation, one that takes place via email, telephone, Whatsapp, Skype or Zoom – whatever technology works in the place you are. I’ll open the application on my end, and we’ll be able to talk to and see each other. You can be anywhere with a good internet connection and enough privacy.
                            </p>
                            
                            <ul>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Browse Our Website
                                </li>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Choose Service
                                </li>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Send Messege
                                </li>
                            </ul>

                            <Link href="/about">
                                <a>Know More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;