import React from 'react';
import baseUrl from '../../utils/baseUrl';
import Link from 'next/link';
import parseISOString from '../../utils/parseISOString';

export default function LatestBlogPost (props) {

    const { recent } = props

    return (
        <div className="blog-area-two pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Blogs</h2>
                </div>

                <div className="row">
                    {
                        recent.map((blog, idx) => {
                            return (
                                <div className="col-md-6 col-lg-4" key={idx}>
                                    <div className="blog-item">
                                        <div className="blog-top">
                                            <Link href={`/blog-details/${blog._id}`}>
                                                <a>
                                                    <picture>
                                                        <img src={blog.imagePath ? `${baseUrl}/${blog.imagePath}` : '/images/default-image.png'} alt="Blog" />
                                                    </picture>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="blog-bottom">
                                            <h3>
                                                <Link href={`/blog-details/${blog._id}`}>
                                                    <a>{blog.title}</a>
                                                </Link>
                                            </h3>
                                            <p style={{textAlign: 'justify'}}>{ blog.content.length > 500 ? blog.content.slice(0, 130) + '...' : blog.content }</p>
                                            <ul>
                                                <li>
                                                    <Link href={`/blog-details/${blog._id}`}>
                                                        <a>
                                                            Read More <i className="icofont-long-arrow-right"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="icofont-calendar"></i>
                                                    {parseISOString(blog.date)}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}