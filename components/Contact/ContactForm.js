import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
        }
    };

    return (
        <div className="drop-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 p-0">
                        <div className="drop-item drop-img">
                            <div className="drop-left">
                                <h2>Drop your message for any info or question</h2>

                                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Your Name" 
                                                    className="form-control" 
                                                    value={contact.name}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Name is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="email" 
                                                    placeholder="Your email" 
                                                    className="form-control" 
                                                    value={contact.email}
                                                    onChange={handleChange}
                                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.email && 'Email is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="number" 
                                                    placeholder="Your phone number" 
                                                    className="form-control" 
                                                    value={contact.number}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.number && 'Number is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject" 
                                                    placeholder="Your Subject" 
                                                    className="form-control" 
                                                    value={contact.subject}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.subject && 'Subject is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="text" 
                                                    cols="30" 
                                                    rows="5" 
                                                    placeholder="Write your message..." 
                                                    className="form-control" 
                                                    value={contact.text}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.text && 'Text body is required.'}
                                                </div>
                                            </div>
                                        </div>
                    
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="drop-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 p-0">
                        <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                            <picture><img src="/images/about4.jpg" alt="Contact" /></picture>

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>

                                <h3>Emergency Call</h3>
                                <p>+1 234 567 8901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;