import React from 'react';

const Volunteer = () => {
    return (
        <section className="contact-form-area register-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading text-center">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Register Now</h2>
                            <p className="section__meta">join us now</p>
                        </div>
                    </div>
                </div>
                <div className="row form-shared-wrap">
                    <div className="col-lg-6">
                        <div className="form-shared-content">
                            <div className="form-img">
                                <img src="/images/form-img.jpg" alt="" />
                            </div>
                            <div className="form-content">
                                <h3 className="form__title">Requirements</h3>
                                <p className="form__desc">
                                    We need any help we can get, especially from driven individuals motivated to create positive change.
                                </p>
                                <ul className="form__list">
                                    <li><i className="fa fa-check"></i> Positive Outlook</li>
                                    <li><i className="fa fa-check"></i> Willing to Engage in Brainstorming</li>
                                    <li><i className="fa fa-check"></i> Active Participation</li>
                                </ul>
                                <div className="contact-us-box">
                                    <div className="contact__item">
                                        <h4>Call us</h4>
                                        <a href="#">666 888 0000</a>
                                    </div>
                                    <div className="contact__item contact__item2">
                                        <h4>Send email</h4>
                                        <a href="#">notHereyet@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Date of Birth" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Occupation" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Write a Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="theme-btn submit__btn">send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
