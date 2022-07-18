import React from 'react'

export default function Testimonial() {
    return (
        <div className="container-xxl bg-primary my-6 py-6 wow fadeInUp" data-wow-delay="0.1s" id='testimonial'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-cogs fa-3x text-white mb-3"></i>
                        <h1 className="mb-2" data-toggle="counter-up">7264</h1>
                        <p className="text-white mb-0">Active Install</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i className="fa fa-users fa-3x text-white mb-3"></i>
                        <h1 className="mb-2" data-toggle="counter-up">6521</h1>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-certificate fa-3x text-white mb-3"></i>
                        <h1 className="mb-2" data-toggle="counter-up">729</h1>
                        <p className="text-white mb-0">Award Wins</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i className="fa fa-quote-left fa-3x text-white mb-3"></i>
                        <h1 className="mb-2" data-toggle="counter-up">5917</h1>
                        <p className="text-white mb-0">Clients Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
