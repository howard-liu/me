import React, { Component } from "react";

const cvLink =
  "https://drive.google.com/file/d/13q2Y0xLVUoHfyCKl5Zc--bMlcv_LDGzL/view";
const background = "images/edited2.png";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: `url(${background})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm Howard
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={cvLink}
                              target="_blank"
                            >
                              View CV <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: `url(${background})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I am an
                            <br />
                            IT Consultant
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/howard-liu"
                              target="_blank"
                            >
                              View GitHub <i className="icon-github" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: `url(${background})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Contact <br />
                            Me!{" "}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="mailto:www.hwd.liu@gmail.com"
                              target="_blank"
                            >
                              Email <i className="icon-mail" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
