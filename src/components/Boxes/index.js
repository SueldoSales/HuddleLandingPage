import React from 'react';

function Boxes() {
    return (
        <main>
			<div className="container">
				<div className="box flex box-reverse-mobile">
					<div>
						<h2>Grow Together</h2>
						<p>
							Generate meaningful discussions with your audience and build a
							strong, loyal community. Think of the insightful conversations you
							miss out on with a feedback form.
						</p>
					</div>
					<div>
						<img
							src="./img/illustration-grow-together.svg"
							alt="grow-together"
						/>
					</div>
				</div>

				<div className="box flex">
					<div>
						<img
							src="./img/illustration-flowing-conversation.svg"
							alt="flowing-conversation"
						/>
					</div>
					<div>
						<h2>Flowing Conversations</h2>
						<p>
							You wouldn't paginate a conversation in real life, so why do it
							online? Our threads have just-in-time loading for a more natural
							flow.
						</p>
					</div>
				</div>

				<div className="box flex box-reverse-mobile">
					<div>
						<h2>Your Users</h2>
						<p>
							It takes no time at all to integrate Huddle with your app's
							authentication solution. This means, once signed in to your app,
							your users can start chatting immediately.
						</p>
					</div>
					<div>
						<img src="./img/illustration-your-users.svg" alt="users" />
					</div>
				</div>
			</div>
		</main>
    );
}

export default Boxes;