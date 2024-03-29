import React, { useCallback, useEffect, useState } from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import categories from '../utils/doctorCategories';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('all');

    const handleSearch = async (e) => {
        setKeyword(e.target.value);
    }

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const fetchData = useCallback( async () => {
        const url = `${baseUrl}/api/doctors/search`;
        const payload = { keyword, category };
        const res = await axios.post(url, payload);
        setDoctors(res.data);
    }, [keyword, category])

    

    useEffect( () => {
        fetchData();
    }, [keyword, category])
 
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Meet Our Qualified Doctors" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Doctors" 
                bgImage="page-title-five" 
            /> 

            <div className="doctor-search-area">
                <div className="container">
                    <div className="row doctor-search-wrap">
                        <div className="col-sm-6 col-lg-6">
                            <div className="doctor-search-item">
                                <div className="form-group">
                                    <i className="icofont-doctor-alt"></i>
                                    <label>Search</label>
                                    <input type="text" name="search" value={keyword} onChange={handleSearch} className="form-control" placeholder="Doctor Name" />
                                </div>
                                <button className="btn doctor-search-btn">
                                    <i className="icofont-search-1"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="doctor-search-item">
                                <div className="form-group">
                                    <i className="icofont-hospital"></i>
                                    <label>Category</label>
                                    <select className="form-control" onChange={handleChange}>
                                        <option value='all'>-- All --</option>
                                        {
                                            categories.map((category, idx) => {
                                                return (
                                                    <option value={category.name} key={idx}>{category.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="doctors-area doctors-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {
                            doctors.map((doctor, idx) => {
                                return(
                                    <div className="col-sm-6 col-lg-4" key={idx}>
                                        <div className="doctor-item">
                                            <div className="doctor-top">
                                                <picture><img src={baseUrl + '/' + doctor.avatarPath} alt="Doctor" /></picture>

                                                <Link href={`/appointment/${doctor._id}`}>
                                                    <a>Get Appointment</a>
                                                </Link>
                                            </div>
                                            <div className="doctor-bottom">
                                                <h3>
                                                    <Link href={`/doctor-details/${doctor._id}`}>
                                                        <a>{doctor.fname + ' ' + doctor.lname}</a>
                                                    </Link>
                                                </h3>
                                                <span>{doctor.major ? doctor.major : 'Unknown'}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Doctors;