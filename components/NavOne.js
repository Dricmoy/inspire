import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        const linethrough = {
            textDecoration: 'line-through',
            marginBottom: '8px',
            fontSize: '16px',
            color: '#555',
        };
        return (
            <div>
                <header className="header-area">
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo.png" alt="Oxpitan" title="Oxpitan" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            <Link href="/donate">
                                                <a className="theme-btn">donate now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        <li style = {linethrough}><a href="#">coming soon</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/causes"><a>causes</a></Link></li>
                                                                <li><Link href="/causes-detail"><a>causes detail</a></Link></li>
                                                                <li><Link href="/donate"><a>donate now</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li style = {linethrough}><a href="#">coming soon</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/events"><a>events</a></Link></li>
                                                                <li><Link href="/events-detail"><a>events detail</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li style = {linethrough}><a href="#">coming soon</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/news"><a>news</a></Link></li>
                                                                <li><Link href="/single-news"><a>news detail</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Inspire</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/about"><a>our mission</a></Link></li>
                                                                <li><Link href="/gallery"><a>gallery</a></Link></li>
                                                                <li><Link href="/volunteer"><a>become a volunteer</a></Link></li>
                                                                <li><Link href="/team"><a>our team</a></Link></li>
                                                                <li><Link href="/sponsor"><a>sponsors</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link href="/contact"><a>contact</a></Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                <li className="sidenav__item"><a href="/">home</a>
                                </li>
                                <li className="sidenav__item"><a href="#">pages</a>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/about"><a>our mission</a></Link></li>
                                        <li><Link href="/volunteer"><a>become a volunteer</a></Link></li>
                                        <li><Link href="/team"><a>our team</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><Link href="/contact"><a>contact</a></Link></li>
                            </ul>
                            <ul className="side-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                            <div className="side-btn">
                                <Link href="/donate"><a className="theme-btn">donate now</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavOne;