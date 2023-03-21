import React from 'react'
import { NavLink } from "react-router-dom"
import { Helmet } from 'react-helmet'
function Home() {
  return (
    <>
    <Helmet />
      <title>My Home page</title>
  {/* Start Banner 
    ============================================= */}
  <div className="banner-area banner-style-four auto-height bg-dark text-light text-multi-weight">
    <div className="banner-items">
      <div className="shape">
        <img src="assets/img/shape/13.png" alt="Shape" />
      </div>
      <div
        className="shape-right-bottom"
        style={{ backgroundImage: "url(assets/img/shape/35.png)" }}
      />
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <div className="content">
              <h2 className="wow slideInRight">
                Professional <span>Cleaning service</span>
              </h2>
              <ul className="wow fadeInUp" data-wow-delay="500ms">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Laundry and Dry Cleaning</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumb wow fadeInUp">
              <img src="assets/img/illustration/1.jpg" alt="Thumb" />
              <i className="flaticon-cleaning-2" />
              <i className="flaticon-antivirus" />
              <i className="flaticon-car-service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Banner */}
  {/* Start Features Area 
    ============================================= */}
  <div className="features-area default-padding">
    <div className="container">
      <div className="features-items text-center">
        <div className="row align-center">
          {/* Single Item */}
          <div className="single-item col-lg-4 col-md-12">
            <div className="item">
              <div className="top">
                <i className="flaticon-cleaning-service" />
                <h4>Expert Employee</h4>
              </div>
              <p>
                Prevailed mr tolerably discourse assurance estimable applauded
                to points.
              </p>
            </div>
            <div className="item">
              <div className="top">
                <i className="flaticon-carpet-2" />
                <h4>Modern Tools</h4>
              </div>
              <p>
                Prevailed mr tolerably discourse assurance estimable applauded
                to points.
              </p>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="single-item award col-lg-4 col-md-12">
            <div className="item text-center">
              <h4>Community awards</h4>
              <h2>
                2023 <strong>Winner</strong>
              </h2>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="single-item col-lg-4 col-md-12">
            <div className="item">
              <div className="top">
                <i className="flaticon-thumbs-up" />
                <h4>Qualified &amp; Expert</h4>
              </div>
              <p>
                Prevailed mr tolerably discourse assurance estimable applauded
                to points.
              </p>
            </div>
            <div className="item">
              <div className="top">
                <i className="flaticon-best-price-2" />
                <h4>Comfortable Price</h4>
              </div>
              <p>
                Prevailed mr tolerably discourse assurance estimable applauded
                to points.
              </p>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
  </div>
  {/* End Features Area */}
  {/* Start About
    ============================================= */}
  <div className="about-style-four-area bg-gray default-padding">
    <div className="container">
      <div className="row align-center">
        <div className="col-lg-6 about-style-four">
          <div className="thumb">
            <div className="twentytwenty-container">
              <img src="assets/img/thumb/13.jpg" alt="Thumb" />
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
          
        </div>
      </div>
    </div>
  </div>
  {/* End About */}
  {/* Start Process Area
    ============================================= */}
  <div className="work-process-area shadow-less text-center default-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h4>Work Process</h4>
            <h2>How it Works</h2>
            <div className="devider" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="process-items">
        <div className="row">
          {/* Single Item */}
          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/services/12.jpg" alt="Thumb" />
                <span>01</span>
              </div>
              <h5>Book Online Form</h5>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/services/14.jpg" alt="Thumb" />
                <span>02</span>
              </div>
              <h5>Get expert cleaner</h5>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <img src="assets/img/services/13.jpg" alt="Thumb" />
                <span>03</span>
              </div>
              <h5>Relax &amp; enjoy cleanin</h5>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
  </div>
  {/* End Process Area */}
  {/* Start Fa   
    ============================================= */}
  <div
    className="faq-area default-padding bg-cover"
    style={{ backgroundImage: "url(assets/img/banner/3.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="faq-style-one">
            <div className="faq-content">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h4
                      className="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How do I make a checklist for a cleaning service?
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h5>Bedrooms, living areas and other rooms</h5>
                      <ol>
                        <li>Dust furniture tops, sides and fronts.</li>
                        <li>Vacuum and/or mop floors.</li>
                        <li>Clean glass surfaces and mirrors.</li>
                        <li>Wipe window sills and blinds.</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h4
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do you clean efficiently?
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h5>Fast House Cleaning Tips</h5>
                      <ol>
                        <li>Clean the whole house, not one room at time</li>
                        <li>Gather all your cleaning tools in a caddy.</li>
                        <li>Clear the clutter.</li>
                        <li>Disinfect countertops and surface areas</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h4
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are the benefits of cleaning?
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <h5>4 Surprising Health Benefits of a Clean Home</h5>
                      <ol>
                        <li>It Keeps You Mentally Healthy</li>
                        <li>It Pests Keep Away.</li>
                        <li>The Home is Inviting.</li>
                        <li>Tips For Keeping Your Home Clean.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* End Faq */}
</>

  )
}

export default Home
