import React, { Component } from 'react';

class Header extends Component {
	
	render() {
		return (
			<header id="header" className="horizontal-w  sm-rgt-mn  w-header-type-10">
		        <div className="container">
					<div className="header-title">
						<div id="title">
							<a href="/">HongAnh's Blog</a>
						</div>

						<div id="description">
							Welcome to HongAnh's Blog.
						</div>

					</div>
					<nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9"><div id="menu-icon"><i className="fa-navicon" /> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1" /><span className="mn-ext2" /><span className="mn-ext3" /></div><div id="menu-icon"><i className="fa-navicon" /> <span>Menu - </span><span className="mn-clk">Navigation</span><span className="mn-ext1" /><span className="mn-ext2" /><span className="mn-ext3" /></div>
						<div className="container">
							<ul id="nav"><li id="menu-item-9557" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9557"><a href="/" data-description="Home">Home</a></li>
								<li id="menu-item-9597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9597"><a href="aboutus" data-description="About Us">About Us</a></li>
								<li id="menu-item-9596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9596"><a href="blog" data-description="Blog">Blog</a></li>
								<li id="menu-item-9592" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9592"><a href="contactus" data-description="Contac Us">Contact</a></li>
							</ul>
						</div>
					</nav>
		        </div>
		    </header>
		)
	}
}

export default Header;