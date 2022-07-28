import React from "react";
import Image from "next/image";

import img from "../assets/img/clinic.jpg";

const About = () => {
	return (
		<section
			className="z-0 flex flex-row justify-between  relative  items-center "
			id="about"
		>
			<article className="flex z-5  absolute flex-row mx-4 ">
				<div className="flex-col mx-4 md:mx-8 xl:mx-16">
					<p className="text-2xl md:text-3xl xl:text-4xl mb-2 font-thin text-center content-center">
						Clínica
					</p>
					<p className="text-3xl md:text-5xl xl:text-6xl font-bold text-center content-center text-orange-500 drop-shadow-lg shadow-red-600">
						Afetto
					</p>
				</div>
				<p className="z-5 text-xs md:text-2xl xl:text-3xl font-bold md:font-normal lg:w-1/2 lg:ml-8 text-orange-500  ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Corporis, excepturi, est repellendus reiciendis reprehenderit
					nihil saepe. Amet asperiores aut voluptates alias aperiam,
					necessitatibus consectetur inventore, voluptas et doloribus esse
					quia.
				</p>
			</article>

			<Image src={img} alt="Pet Clinic" className="z-0 opacity-30" />
		</section>
	);
};

export default About;
