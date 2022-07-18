import React from 'react'

export default function Features() {
    return (
        <div className="container-xxl py-6" id='features'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-5">
                            <i className="fa fa-4x fa-edit text-primary mb-4"></i>
                            <h5 className="mb-3">Fully Customizable</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-5">
                            <i className="fa fa-4x fa-sync text-primary mb-4"></i>
                            <h5 className="mb-3">App Integration</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-5">
                            <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i>
                            <h5 className="mb-3">Drag And Drop</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
