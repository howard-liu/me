import React, { Component } from 'react'

const revelText = "Revel is an end-to-end event planning tool that helps hosts find and manage service vendors in their local area. I am a web developer at Revel using technology such as React with Redux, NodeJS, Responsive CSS, Docker, Studio3T, and Jira. Small tightknit team taught Agile, effective communication and collective problem solving";
const oaktreeText = "Oaktree is Australia’s largest youth-run, anti-poverty organisation. I created resources (written and multimedia) for both internal messages and outgoing campaigns; I also set up and administrated the technical backend of campaigns by bolstering communications in the team and with other departments, and reinforced Agile methodology.";
const plentixText = "Plentix is an ICO that takes the online referral system onto the blockchain. As a business analyst, I took part in client meetings to provide insight into business decisions as well as assisted in the Plentix whitepaper through copywriting and media creation";
const universityText = "I am studying my last year at the University of Melbourne. My highlights here include being part of the Autonomous Robotics Research Project, which involved the team of National Instrument Autonomous Robotics Competition (where we achieved 2nd place) & ICRA 2018 DJI RoboMaster AI Challenge teams; as well as participating in the SWIFT Institute Student Challenge and UniMelb StartUp Pitch Competition. My favourite part of the courses was designing and building a robotic prosthetic arm for the Colombian charity e-NABLE.";
const parnellText = "I completed the CIE A Levels with A*s in Maths, Physics, Chemistry, Business Studies and Economics. My achievements though high school involve being a Prefect, which allowed me to lead the 40 Hour Famine, create event posters, run and coached badminton club; I also achieved NZQA Scholarships in Mathematics and Physics; our team was awarded 1st Place of regionals in the International Young Physicists Tournament; and runner up New Zealand’s Next Top Engineering Scientist Competition. I also had the opportunity to lead a team as CEO in the Young Enterprise Scheme.";
const bornText = "I was born in Taichung City, in Taiwan in 1998 and grew up there until I moved to New Zealand in time for Primary School. I spoke Mandarin at home and English elsewhere growing up.";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.revelthat.com/">Web Developer at Revel</a> <span>2019-present</span></h2>
                        <p>{revelText}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://plentix.io/">Business Analyst at Plentix</a> <span>2018</span></h2>
                        <p>{plentixText}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.oaktree.org/">Campaigns Advisor at Oaktree</a> <span>2018</span></h2>
                        <p>{oaktreeText}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.unimelb.edu.au/">Bachelor of Science at the University of Melbourne, Majoring in Mechatronics</a> <span>2016-present</span></h2>
                        <p>{universityText}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://parnellcollege.acgedu.com/">ACG Parnell College</a> <span>2008-2015</span></h2>
                        <p>{parnellText}</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.google.com/maps/place/Taichung+City,+Taiwan/data=!4m2!3m1!1s0x346917dff97922ef:0x87523ee47ea6447f?sa=X&ved=2ahUKEwjMgrjE-_rhAhUFf30KHZ-sAqQQ8gEwFHoECA4QCA">Howard Liu was born!</a> <span>1998</span></h2>
                        <p>{bornText}</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
