import React, { Component } from "react";

const mescadaText =
  "Mescada is an industrial automation consultancy, specialising as a Siemens Solution Partner, that works with major players in the Pharmaceutical, Food & Beverage, Manufacturing, Chemical and Water industries. I currently work at CSL Behring as an Automation Engineer, mainly doing Control Systems and Qualification.";
const revelText =
  "Revel is an end-to-end event planning tool that helps hosts find and manage service vendors in their local area. I am a web developer at Revel using technology such as React with Redux, NodeJS, Responsive CSS, Docker, Studio3T, and Jira. I have implemented Spotify, Soundcloud widgets; redesigned and implemented event service dashboard and service profile; and built venues as a new category, which was a full stack project which increased the scope of the entire company.";
const oaktreeText =
  "Oaktree is Australia’s largest youth-run, anti-poverty organisation. I created written and multimedia resources for both internal messages and outgoing campaigns, and distributed them using the database. I also set up communications in campaigns and between teams that helped solve the lack of inter-team communication.";
const plentixText =
  "Plentix is an ICO that takes the online referral system onto the blockchain. I helped create the whitepaper through copywriting and media creation. I also assisted in business decisions.";
const universityText =
  "The highlights of my degree include being part of the team of National Instrument Autonomous Robotics Competition (we achieved 2nd place) and ICRA 2018 DJI RoboMaster AI Challenge team, both where I was involved in traversal algorithms. I also participated in the SWIFT Institute Student Challenge and UniMelb StartUp Pitch Competition. My favourite part of the courses was designing and building a robotic prosthetic arm which we got to present to the Colombian charity e-NABLE.";
const parnellText =
  "I completed the CIE A Levels with A*s in Maths, Physics, Chemistry, Business Studies and Economics. My achievements though high school involve being a Prefect, which allowed me to lead the 40 Hour Famine, create event posters, run and coached badminton club; I also achieved NZQA Scholarships in Mathematics and Physics; our team was awarded 1st Place of regionals in the International Young Physicists Tournament; and runner up New Zealand’s Next Top Engineering Scientist Competition. I also had the opportunity to lead a team as CEO in the Young Enterprise Scheme.";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="http://www.mescada.com/" target="_top">
                            IT Consultant at Mescada
                          </a>{" "}
                          <span>2019-present</span>
                        </h2>
                        <p>{mescadaText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="https://www.revelthat.com/" target="_top">
                            Web Developer at Revel
                          </a>{" "}
                          <span>2019-present</span>
                        </h2>
                        <p>{revelText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="https://plentix.io/" target="_top">
                            Business Analyst at Plentix
                          </a>{" "}
                          <span>2018</span>
                        </h2>
                        <p>{plentixText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="https://www.oaktree.org/" target="_top">
                            Campaigns Advisor at Oaktree
                          </a>{" "}
                          <span>2018</span>
                        </h2>
                        <p>{oaktreeText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="https://www.unimelb.edu.au/" target="_top">
                            Bachelor of Science at the University of Melbourne,
                            Majoring in Mechatronics
                          </a>{" "}
                          <span>2016-2019</span>
                        </h2>
                        <p>{universityText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a
                            href="https://parnellcollege.acgedu.com/"
                            target="_top"
                          >
                            ACG Parnell College
                          </a>{" "}
                          <span>2008-2015</span>
                        </h2>
                        <p>{parnellText}</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
