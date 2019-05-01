import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/HLiu.png)'}} />
              <h1 id="colorlib-logo"><a href="">Howard Liu</a></h1>
              <span className="email"><i className="icon-mail"></i> hwd.liu@gmail.com</span>
              <span className="number"><i className="icon-phone"></i> +61 423 625 055</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://twitter.com/hwd_liu" target="_blank"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/hwd.liu/" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/howard-liu-a1995b102/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/howard-liu" target="_blank"><i className="icon-github"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCB9f9-0PO8mn1kK_ZYwARLA" target="_blank"><i className="icon-play4"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                  Automated deployment on gh-pages using Travis-CI
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
