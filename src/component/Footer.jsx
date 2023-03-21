import { NavLink } from "react-router-dom"
const Footer = () => {
    return (
        <>

            <footer className="bg-theme text-light">

                <div className="animate-illustration">
                    <img src="assets/img/illustration/2.png" alt="illustration" />
                </div>

                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 item">
                                <div className="f-item about">
                                    <img src="assets/img/logo-light.png" alt="Logo" />
                                    <p>
                                        Allt du behöver för ditt hem/kontor habibi. Vi är bäst no joke.
                                    </p>
                                    <form action="#">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="form-control"
                                            name="email"
                                        />
                                        <button type="submit">
                                            {" "}
                                            <i className="arrow_right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Quick LInk</h4>
                                    <ul>
                                        <li>
                                            <NavLink to="/">
                                            <a>
                                                <i className="fas fa-angle-right" /> Home
                                            </a>
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="about">
                                            <a>
                                                <i className="fas fa-angle-right" /> About us
                                            </a>
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="service">
                                            <a>
                                                <i className="fas fa-angle-right" /> Service
                                            </a>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Services</h4>
                                    <ul>
                                    <li>
                                    <NavLink to="house-cleaning">
                                            <a>
                                            <i className="fas fa-angle-right" /> House Cleaning
                                            </a>
                                            </NavLink>
                                        </li>
                                        
                                        <li>
                                        <NavLink to="carpet">
                                            <a>
                                                <i className="fas fa-angle-right" /> Office Cleaning
                                            </a>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="f-item contact-widget">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <div className="address">
                                        <ul>
                                            <li>
                                                Isafjordsgatan 30C, Kista
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-clock" />
                                                </div>
                                                <div className="content">
                                                    <strong>Opening Hours:</strong>
                                                    8:00 AM – 16:00 PM
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone" />
                                                </div>
                                                <div className="content">
                                                    <strong>Phone:</strong>
                                                    <a href="tel:0764349184">+47 0764349184</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        © Copyright 2023. All Rights Reserved by{" "}
                                        <a href="#">JETSKII GRUPPEN</a>
                                    </p>
                                </div>
                                <div className="col-lg-6 text-right link">
                                    <ul>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">GDPR</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed-shape-left">
                    <img src="assets/img/shape/5.png" alt="Shape" />
                </div>

            </footer>

        </>

    )
}

export default Footer
