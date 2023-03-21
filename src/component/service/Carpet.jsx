import React from 'react'

function Carpet() {
  return (
    <>
  <div
    className="breadcrumb-area text-center shadow dark text-light bg-cover"
    style={{ backgroundImage: "url(assets/img/banner/21.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1>Carpet Service</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">
                <i className="fas fa-home" /> Services
              </a>
            </li>
            <li className="active">Details</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="services-details-area default-padding">
    <div className="container">
      <div className="services-details-items">
        <div className="row">
          <div className="col-lg-8 services-single-content">
            <div className="thumb">
              <img src="assets/img/banner/19.jpg" alt="Thumb" />
            </div>
            <h2>Making A Clean Difference</h2>
            <p>
              We denounce with righteous indige nation and dislike men who are
              so beguiled and demo realized by the charms of pleasure of the
              moment, so blinded by desire, that they cannot foresee the pain
              and trouble that are bound to ensue cannot foresee. These cases
              are perfectly simple and easy to distinguish. In a free hour, when
              our power of choice is untrammelled data structures manages data
              in technology.
            </p>
            <div className="features">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h4>Included Services</h4>
                    <ul>
                      <li>100% Guarantee Cleaning</li>
                      <li>24/7 Alltime Supporting</li>
                      <li>Fully Carefull &amp; Safety Guard</li>
                      <li>Expert Team Members</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h4>Benifits of services</h4>
                    <ul>
                      <li>No Hidden Charges</li>
                      <li>Special Careness Risk Free</li>
                      <li>Quality Standards</li>
                      <li>15+ Years Experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Nam libero tempore, cum soluta nobis est elig endi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias. consequatur aut
              perferendis doloribus asperiores repellat. The wise man therefore
              always holds in these matters to this principle of selection: he
              rejects pleasures to secure other greater pleasures, or else he
              endures pains to avoid worse pains. pleasures have to be
              repudiated and annoyances accepted.
            </p>
            <div className="services-more">
              <h2>Popular Services</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="item">
                    <i className="flaticon-washing-plate" />
                    <h4>
                      <a href="#">Kitchen Cleaning</a>
                    </h4>
                    <p>
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="item">
                    <i className="flaticon-cloth" />
                    <h4>
                      <a href="#">Window Cleaning</a>
                    </h4>
                    <p>
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="item">
                    <i className="flaticon-window-cleaning" />
                    <h4>
                      <a href="#">Door Cleaning</a>
                    </h4>
                    <p>
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 services-sidebar">
            <div className="single-widget services-list">
              <h4 className="widget-title">Services List</h4>
              <div className="content">
                <ul>
                  <li className="current-item">
                    <a href="#">Carpet Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Residential Services</a>
                  </li>
                  <li>
                    <a href="#">Park Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Plumbing Serivices</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="single-widget quick-contact text-light"
              style={{ backgroundImage: "url(assets/img/thumb/7.jpg)" }}
            >
              <div className="content">
                <i className="fas fa-phone" />
                <h4>Need any help?</h4>
                <p>
                  We are here to help our customer any time. You can call on
                  24/7 To Answer Your Question.
                </p>
                <h2>(012) 6679545</h2>
              </div>
            </div>
            <div className="single-widget brochure">
              <h4 className="widget-title">Brochure</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-file-pdf" /> Download Brochure{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-file-pdf" /> Company Details{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Carpet
