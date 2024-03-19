import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/about-img2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Discover About Inspire</h2>
                                <p className="section__meta">learn about our non profit agency</p>
                                <p className="section__desc">
                                At Inspire, we are driven by a profound commitment to empower and uplift individuals from immigrant backgrounds. Our mission is rooted in the belief that every immigrant deserves equitable access to opportunities and resources for personal and professional growth. Through our dedicated initiatives and programs, we aim to foster a supportive and inclusive community where immigrants can thrive and fulfill their potential. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
