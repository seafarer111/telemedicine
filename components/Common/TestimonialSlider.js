import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    autoplay:false,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],
};

const TestimonialSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="review-area ptb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="feedback-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="feedback-item">
                        <div className="client-img">
                            <picture><img src="/images/clients/client1.png" alt="Feedback" /></picture>
                            <h3>Steve Kim</h3>
                        </div>
                        <p>Experience of Telemedicine in Gastroenterology Out-Patient Practice During the COVID-19 Pandemic: Experiences from a Tertiary-Care Hospital in a Developing Country.</p>
                    </div>

                    <div className="feedback-item">
                        <div className="client-img">
                            <picture><img src="/images/clients/client2.png" alt="Feedback" /></picture>
                            <h3>John Cena</h3>
                        </div>
                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                    </div>

                    <div className="feedback-item">
                        <div className="client-img">
                            <picture><img src="/images/clients/client3.png" alt="Feedback" /></picture>
                            <h3>Mac Smith</h3>
                        </div>
                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                    </div>

                    <div className="feedback-item">
                        <div className="client-img">
                            <picture><img src="/images/clients/client4.png" alt="Feedback" /></picture>
                            <h3>Shane Watson</h3>
                        </div>
                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TestimonialSlider;