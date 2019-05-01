import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm Howard, a budding web developer in Melbourne, finishing my degree in Mechatronics Engineering.</p>
                    <p>I currently work for <a href="https://www.revelthat.com/">Revel</a>, a startup aiming to connect event hosts with local services. My role as a developer involves mostly front end design and implementation using React with Redux, but I am moving to become more of a full stack developer with NodeJS.</p>
                    <p>I am in my last year studying for a Bachelor of Science (Mechatronics major) in the University of Melbourne, with my electives in programming. Through these classes, I am proficient in Python, Java and C, as well as Object Oriented Programming and the Agile Methodology.</p>
                    <p>I was born in Taichung, Taiwan and moved to Auckland, New Zealand for most of my life and I moved to Melbourne for university. I enjoy video/audio production, gymming and going to dog beaches.&nbsp;</p>
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
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">A bit about me...</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box" >
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3 >Web Developer </h3>
                    <p>I am working with <a href="https://www.revelthat.com/">Revel</a> building a site using JavaScript, React, Redux, HTML, CSS and NodeJS</p>
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
                    <p>I am a Mechatronics Major with Computer Science electives from the University of Melbourne</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-brush" />
                </span>
                <div className="desc">
                    <h3>Media creator</h3>
                    <p>I am experienced in writing, video and audio production, practical animation and social media management</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
