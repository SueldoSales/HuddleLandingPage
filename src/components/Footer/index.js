import React from 'react';

function Footer() {
    return (
        <footer>
			<div className="container">
				<img src="./img/logo white.svg" alt="logo" />

				<div className="flex align-start">
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</li>
						<li>
							+1-543-123-4567
						</li>
						<li>
							example@huddle.com
						</li>
					</ul>
					<ul>
						<li>
							About Us
						</li>
						<li>
							What We Do
						</li>
						<li>
							FAQ
						</li>
					</ul>

					<ul>
						<li>
							Career
						</li>
						<li>
							Blog
						</li>
						<li>
							Contact Us
						</li>
					</ul>

					<ul className="social-media">
						<li>
							<a className="circle" href="https://sueldosales.github.io/">
								<i className="fab fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a className="circle" href="https://sueldosales.github.io/">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a className="circle" href="https://sueldosales.github.io/">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>

				<p>
					&copy; Copyright 2018 Huddle. All rights reserved.
				</p>
                <p className="sueldo">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://sueldosales.github.io/"><strong>Sueldo Sales</strong></a>.</p>
			</div>
		</footer>
    );
}

export default Footer;