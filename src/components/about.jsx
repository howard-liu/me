import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>I'm Howard, an IT Consultant in Melbourne.</p>
                      <p>
                        I currently work for{" "}
                        <a href="http://www.mescada.com/" target="_blank" rel="noopener noreferrer">
                          Mescada
                        </a>
                        , an industrial automation consultancy, specialising as
                        a Siemens Solution Partner, that works with major
                        players in the Pharmaceutical, Food & Beverage,
                        Manufacturing, Chemical and Water industries.
                      </p>
                      <p>
                        I have also worked as a web developer, business analyst
                        and volunteered as campaigns advisor. This allowed me to
                        gain experience in coding and design, media creation and
                        distribution, as well as team communication.
                      </p>
                      <p>
                        I was born in Taichung, Taiwan and moved to Auckland,
                        New Zealand for most of my life and I moved to Melbourne
                        for university. I enjoy reading, running and going to
                        dog beaches.&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">A bit about me...</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-server" />
                  </span>
                  <div className="desc">
                    <h3>IT Consultant</h3>
                    <p>
                      I work full time for{" "}
                      <a href="http://www.mescada.com/" target="_blank" rel="noopener noreferrer">
                        Mescada
                      </a>
                      , an automation company, as a IT Consultant. I currently
                      work full time at CSL Behring for Project Aurora
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Developer </h3>
                    <p>
                      I also work with{" "}
                      <a href="https://www.revelthat.com/" target="_blank" rel="noopener noreferrer">
                        Revel
                      </a>{" "}
                      during my spare time, building a site using ReactJS,
                      Redux, CSS, MongoDB and NodeJS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-book" />
                  </span>
                  <div className="desc">
                    <h3>Bachelor of Science</h3>
                    <p>
                      I am a Mechatronics Major with Computer Science electives
                      from the University of Melbourne
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
