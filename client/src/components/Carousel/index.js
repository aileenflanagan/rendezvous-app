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
								<img src="images/people-working.jpg" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Writers Group</h5>
									<p class="darker">"Looking for new members! Join us, we're fun!"</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="images/awesome_720.jpg" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Photography Group</h5>
									<p class="darker">"Click goes the camera!"</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="images/people-exercising.jpg" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5 class="darker2">Hardcore Workout Group</h5>
									<p class="darker">"Leave your tears at home! We want to train hard and will push you to your ideal weight!"</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="images/dogs1.jpg" className="d-block w-100" alt="..." />
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