const Hero = () => {
  return (
			<section className="py-10 bg-masifunde">
				<div className="px-8 mx-auto max-w-7xl">
					<div className="flex flex-col items-start justify-center w-full h-full">
						<h1 className="text-4xl text-white lg:text-5xl">
							<span className="italic font-bold">Apply</span> <br />
							<span className="font-extrabold uppercase lg:text-6xl">
								Changemaker
							</span>{" "}
							<br />
							<span className="font-extrabold uppercase lg:text-7xl">
								Network
							</span>{" "}
							<br />
						</h1>
						<p className="max-w-lg font-medium text-white text-md">
							Thank you for completing the Partner Self Check. You qualify to
							apply to become an implementation partner for masifunde’s
							Changemaker Network. Please apply on the link below.
						</p>
						<span className="px-10 py-2 mt-3 text-white bg-slate-700">
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSev5hNv720WO-atg8_xdPnaP6MnnFLgiB3Jkhgo_N9Teg8-xg/viewform"
								className="text-2xl font-bold"
							>
								Apply Now
							</a>
						</span>
					</div>
				</div>
			</section>
		);
};
export default Hero;
