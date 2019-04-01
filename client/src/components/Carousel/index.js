import React from "react";
import "./style.css";

function Carousel() {
	return (
		<div className="row">
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
								<img src="https://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0_400x400.jpg" className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="..." className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="..." className="d-block w-100" alt="..." />
								<div className="carousel-caption d-none d-md-block">
									<h5>Third slide label</h5>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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