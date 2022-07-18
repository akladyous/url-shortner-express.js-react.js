import React from 'react'

export default function Main() {
    return (
        <div className="container-xxl bg-primary" id='home'>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated slideInDown">Awesome Software To Manage Your Business</h1>
                        <p className="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd dolor sed magna dolor.</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: "58px" }} />
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-3 shadow-none position-absolute top-0 end-0 m-2">Free Trail</button>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid rounded animated zoomIn" src="img/hero.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
