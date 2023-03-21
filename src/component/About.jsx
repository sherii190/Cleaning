import React from 'react'

function About() {
  return (
    <>
  {/* Start Breadcrumb 
    ============================================= */}
  <div
    className="breadcrumb-area text-center shadow dark text-light bg-cover"
    style={{ backgroundImage: "url(assets/img/banner/21.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1>About Us</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">
                <i className="fas fa-home" /> Home
              </a>
            </li>
            <li className="active">About</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumb */}
  {/* Start About
    ============================================= */}
  <div className="about-style-two-area default-padding">
    <div className="container">
      <div className="row align-center">
        <div className="col-lg-6 about-style-two">
          <div className="thumb">
            <img src="assets/img/thumb/11.jpg" alt="Thumb" />
            <img src="assets/img/thumb/12.jpg" alt="Thumb" />
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={50} data-speed={5000}>
                  50
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Team Member</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-style-three">
          <h4 className="sub-heading">About Cleaning Agency </h4>
          <h2 className="heading">
            We are committed to give <br /> our best services
          </h2>
          <p>
            Friendly bachelor entrance to on by. Extremity as if breakfast
            agreement. Off now mistress provided out horrible opinions.
            Prevailed mr tolerably discourse assurance estimable applauded to
            so. Him everything melancholy uncommonly but solicitude inhabiting
            projection.
          </p>
          <ul>
            <li>Service Monitoring</li>
            <li>Fast Communication</li>
            <li>Customer Support Live Chat</li>
            <li>Information for Any Services</li>
          </ul>
          <a className="btn btn-theme primary effect btn-md" href="#">
            Book Us
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End About */}
  {/* Start Fun Factor Area
    ============================================= */}
  <div className="fun-factor-area bg-theme text-light">
    <div className="container">
      <div className="fun-fact-items text-center default-padding">
        <div className="row">
          <div className="col-lg-4 col-md-6 item">
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={1267} data-speed={5000}>
                  1267
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Orders</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item">
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={846} data-speed={5000}>
                  846
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Trusted Clients</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item">
            <div className="fun-fact">
              <div className="counter">
                <div className="timer" data-to={36} data-speed={5000}>
                  36
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Years Of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Fixed BG */}
    <div
      className="fixed-bg"
      style={{ backgroundImage: "url(assets/img/shape/29.png)" }}
    />
    {/* Fixed BG */}
  </div>
  {/* End Fun Factor Area */}
  {/* Start Team 
    ============================================= */}
  <div className="team-area bg-gray default-padding bottom-less">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h4>awesome team</h4>
            <h2>
              We have the best team to <br /> clean your surrounding area.
            </h2>
            <div className="devider" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="team-style-one-box">
        <div className="row">
          {/* Single Item */}
          <div className="col-lg-4 col-md-6 text-center team-style-one">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/team/1.jpg" alt="Thumb" />
                <div className="social">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="share-toggle"
                    hidden=""
                  />
                  <label htmlFor="toggle" className="share-button">
                    <i className="fas fa-plus" />
                  </label>
                  <a href="#" className="share-icon facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="share-icon twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="share-icon instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="info">
                <h4>
                  <a href="team-single.html">Anna Green</a>
                </h4>
                <p>Carpet Cleaner</p>
              </div>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="col-lg-4 col-md-6 text-center team-style-one">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/team/2.jpg" alt="Thumb" />
                <div className="social">
                  <input
                    type="checkbox"
                    id="toggle2"
                    className="share-toggle"
                    hidden=""
                  />
                  <label htmlFor="toggle2" className="share-button">
                    <i className="fas fa-plus" />
                  </label>
                  <a href="#" className="share-icon facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="share-icon twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="share-icon instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="info">
                <h4>
                  <a href="team-single.html">Liana Rob</a>
                </h4>
                <p>Office Cleaner</p>
              </div>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="col-lg-4 col-md-6 text-center team-style-one">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/team/3.jpg" alt="Thumb" />
                <div className="social">
                  <input
                    type="checkbox"
                    id="toggle3"
                    className="share-toggle"
                    hidden=""
                  />
                  <label htmlFor="toggle3" className="share-button">
                    <i className="fas fa-plus" />
                  </label>
                  <a href="#" className="share-icon facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="share-icon twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="share-icon instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="info">
                <h4>
                  <a href="team-single.html">Thomas Pual</a>
                </h4>
                <p>Cleaning Manager</p>
              </div>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
  </div>
  {/* End Team*/}
</>

  )
}

export default About
