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
                        <a href="http://www.mescada.com/" target="_blank">
                          Mescada
                        </a>
                        , an industrial automation company that is experienced
                        in automation design, support, commissioning, fault
                        finding, plant optimisation and automation products
                        service and repair.
                      </p>

                      <p>
                        I also develop for{" "}
                        <a href="https://www.revelthat.com/" target="_blank">
                          Revel
                        </a>
                        , a startup aiming to connect event hosts with local
                        services. My role mostly involves front end design and
                        implementation using ReactJS and CSS, but other times it
                        extends to NodeJS and MongoDB.
                      </p>
                      <p>
                        I have also worked as a business analyst and volunteered
                        as campaigns advisor. This allowed me to gain experience
                        in media creation and distribution, as well as team
                        communication.
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
                      <a href="http://www.mescada.com/" target="_blank">
                        Mescada
                      </a>
                      , an automation company, as a Graduate IT Consultant
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
                      <a href="https://www.revelthat.com/" target="_blank">
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
