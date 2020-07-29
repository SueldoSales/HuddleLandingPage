import React from 'react';

function Header() {
    return (
        <header>
			<div className="container">
				<nav className="flex">
					<img className="logo" src="./img/logo.svg" alt="logo" />
					<button className="btn">
						Try It Free
					</button>
				</nav>

				<div className="flex">
					<div>
						<h1>Build The Community Your Fans Will Love</h1>

						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>

						<button className="btn btn-primary">
							Get Started For Free
						</button>
					</div>

					<div>
						<img
							className="header-img"
							src="./img/illustration-mockups.svg"
							alt="mockups"
						/>
					</div>
				</div>
			</div>
		</header>
    );
}

export default Header;