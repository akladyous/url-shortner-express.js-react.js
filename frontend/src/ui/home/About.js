import React from 'react'

export default function About() {
    return (
        <div className="container-xxl py-6" id="about">
            <div className="container">
                <div className="row g-5 flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4">Manage & Push Your Business To The Next Level</h1>
                        <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                <i className="fa fa-check"></i>
                            </div>
                            <div className="ms-4">
                                <h5>First Working Process</h5>
                                <p className="mb-0">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                <i className="fa fa-check"></i>
                            </div>
                            <div className="ms-4">
                                <h5>24/7 Hours Support</h5>
                                <p className="mb-0">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna</p>
                            </div>
                        </div>
                        <a href="/" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid rounded wow zoomIn" data-wow-delay="0.5s" alt='' src="img/about.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
