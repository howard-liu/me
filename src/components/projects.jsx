import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <a href="http://www.mescada.com/" target="_blank">
                <div
                  className="col-md-4 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div
                    className="project"
                    style={{ backgroundImage: "url(images/mescada.jpg)" }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3 style={{ color: "white" }}>Mescada</h3>
                        <span>IT Consultant for an automation company</span>
                        <p className="icon">
                          <span>
                            <a href="http://www.mescada.com/" target="_blank">
                              <i className="icon-eye" />
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://www.revelthat.com/" target="_blank">
                <div
                  className="col-md-4 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div
                    className="project"
                    style={{ backgroundImage: "url(images/revel.jpg)" }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3 style={{ color: "white" }}>Revel</h3>
                        <span>Web Development for a startup</span>
                        <p className="icon">
                          <span>
                            <a
                              href="https://www.revelthat.com/"
                              target="_blank"
                            >
                              <i className="icon-eye" />
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/writing.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://howard-liu.github.io/blog/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </h3>
                      <span>Site I made to host my writing</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://howard-liu.github.io/blog/"
                            target="_blank"
                          >
                            <i className="icon-eye" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://github.com/howard-liu/blog"
                            target="_blank"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/cards.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://github.com/howard-liu/Poker-Project/"
                          target="_blank"
                        >
                          Poker Game and Bot
                        </a>
                      </h3>
                      <span>
                        Development of the game and simple agent (Python)
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/howard-liu/Poker-Project/"
                            target="_blank"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/chess.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://github.com/howard-liu/chess"
                          target="_blank"
                        >
                          Chess Algorithms
                        </a>
                      </h3>
                      <span>An exploration of chess algorithms (Python)</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/howard-liu/chess"
                            target="_blank"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/2048.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          href="https://github.com/howard-liu/2048"
                          target="_blank"
                        >
                          2048
                        </a>
                      </h3>
                      <span>Recreation of popular game (Python)</span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/howard-liu/2048"
                            target="_blank"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
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
