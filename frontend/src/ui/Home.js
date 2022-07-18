import Main from './home/Main.js'
import Features from './home/Features.js'
import About from './home/About.js';
import Testimonial from './home/Testimonial.js'

export default function Home() {
    return (
        <div className="row">
            {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> */}

            {/* ----------------------  */}
            {/* <Main /> */}
            <div className="container-fluid bg-primary pt-0 border-1" id="home">
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
            {/* ----------------------  */}
            {/* <About /> */}
            <div className="container-xxl border-1" id="about">
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
            {/* ----------------------  */}
            <div className="container-xxl border-1" id='overview' style={{ height: '300px' }}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, impedit iste. Aperiam magnam corporis soluta molestias fuga voluptatem magni amet sit. Eum doloribus error iusto illum, sunt maxime repellendus maiores.</p>
            </div>
            {/* <Features /> */}
            <div className="container-xxl border-1" id='features'>
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
            {/* ----------------------  */}
            <div className="container-xxl border-1" id='pricing' style={{ height: '300px' }}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, impedit iste. Aperiam magnam corporis soluta molestias fuga voluptatem magni amet sit. Eum doloribus error iusto illum, sunt maxime repellendus maiores.</p>
            </div>
            {/* ----------------------  */}
            {/* <Testimonial /> */}
            <div className="container-xxl bg-primary my-6 wow fadeInUp border-1" data-wow-delay="0.1s" id='testimonial'>
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
            {/* ----------------------  */}
            {/* ----------------------  */}
            <div className="container-xxl border-1" id='contact' style={{ height: '300px' }}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, impedit iste. Aperiam magnam corporis soluta molestias fuga voluptatem magni amet sit. Eum doloribus error iusto illum, sunt maxime repellendus maiores.</p>
            </div>
            {/* ----------------------  */}
        </div>
    );
}
