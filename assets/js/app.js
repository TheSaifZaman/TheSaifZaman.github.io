$(document).ready(function () {

	// Experiences Data Reader
	const Experiences = () => {
		$.ajax({
			url: './assets/js/src/experiences.json',
			type: 'GET',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderExperiences').append(`
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.${i + 4}s">
							<div>
								<h5>${response[i]['title']}</h5>
								<h6 class="badge badge-dark d-inline-block my-3">${response[i]['duration']}</h6>
								<h6 class="font-weight-bold">Responsibilities:</h6>
								<div class="mb-3" style="font-size: 15px;">${response[i]['responsibility']}</div>
								<h6 class="font-weight-bold">Impact:</h6>
								<div style="font-size: 15px;">${response[i]['impact']}</div>
							</div>
						</div>
						`);
					}
				}
			}
		});
	}


	// Educations Data Reader
	const Educations = () => {
		$.ajax({
			url: './assets/js/src/educations.json',
			type: 'GET',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderEducations').append(`
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.${i + 5}s">
							<div>
								<h5>${response[i]['title']}</h5>
								<h6 class="badge badge-dark d-inline-block my-3">${response[i]['duration']}</h6>
								<h6 class="font-weight-bold">Achievments:</h6>
								<div class="mb-3" style="font-size: 15px;">${(response[i]['achievements'].length > 1) ? response[i]['achievements'].join('<br/>') : response[i]['achievements'].toString()}</div>
								<h6 class="font-weight-bold">Disclaimer:</h6>
								<div style="font-size: 15px;">${response[i]['disclaimer']}</div>
							</div>
						</div>
						`);
					}
				}
			}
		});
	}


	// Portfolio Data Reader
	const Portfolio = () => {
		$.ajax({
			url: './assets/js/src/protfolio.json',
			type: 'GET',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderPortfolio').append(`
						<div class="portfolio-item swiper-slide " data-groups="all slideshow">
							<a href="${response[i]['images']}" class="portfolio-item--content simple-ajax-popup">
								<div class="portfolio-item--img b-box">
									<img src="${response[i]['images']}" class="img-fluid mx-auto" alt="${response[i]['title']} Images">
								</div>
								<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
									<div class="portfolio-item--desc-in">
										<h3 class="mb-2 text-white">${response[i]['title']}</h3>
									</div>
								</div>
							</a>
							<div class="row text-center">
								<div class="col-lg-6">
									<a href="${response[i]['githubUrl']}" class="text-muted">Learn More</a>
								</div>
								<div class="col-lg-6"><a href="${response[i]['websiteUrl']}" class="text-muted">Owner Shifted The Website</a></div>
							</div>
						</div>
						`);
					}
				}
			}
		});
	}


	// Testimonial Data Reader
	const Testimonial = () => {
		$.ajax({
			url: './assets/js/src/testimonial.json',
			type: 'GET',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderTestimonials').append(`
						<div class="swiper-slide single-testimonials">
							<div class="single-testimonials-in text-center p-4 b-box mx-auto" style="border-radius: 10px;">
								<img src="${response[i]['images']}" alt="" class="mx-auto rounded-circle">
								<p class="pt-2 mt-4 text-center">"${response[i]['quotes']}"</p>
								<span class="font-weight-bold mt-3 d-block">- ${response[i]['author']}</span>
							</div>
						</div>
						`);
					}
				}
			}
		});
	}


	Experiences();
	Educations();
	Portfolio();
	Testimonial();


	$(document).on('change', '#myCertifactionContent', function() {
		let test = $(this).val();
		console.log(test);
	});

});
