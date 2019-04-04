import React from "react";
import "./style.css";

function Carousel() {
	return (
		<div id="color" className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6" id="carousel-div">
				<div className="bd-example">
					<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
							<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
							<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
							{/* placeholder image */}
								<img src="https://flgowrley.files.wordpress.com/2016/12/writing-group-1.jpg?w=1140" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Writers Group</h5>
									<p class="darker">"Looking for new members! Join us, we're fun!"</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/580x350/Secrets+of+People+Who+Love+to+Work+Out/Secret+8.jpg" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Hardcore Workout Group</h5>
									<p class="darker">"Leave your tears at home! We want to train hard and will push you to your ideal weight!"</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="http://azure.wgp-cdn.co.uk/app-yourdog/posts/dog_walking_groups.jpg?&width=1200&height=630&mode=crop" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Doggy Walk Group</h5>
									<p class="darker">"Outside? My favorite thing! Trees? My favorite thing! "We're going for a walk? I just peed on your shoe! I can't contain my excitement!"</p>
								</div>
							</div>
						</div>
						<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Carousel;