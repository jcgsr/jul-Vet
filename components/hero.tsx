import React from "react";
import Image from "next/image";

import Card from "./card";

import img from "../assets/dog-sleeping.jpg";

const Hero = () => {
	return (
		<section className="z-0 flex bg-cover relative  md:items-center items-end">
			<Card />
			<Image src={img} alt="Sleeping Dog" className="z-0 " />
		</section>
	);
};

export default Hero;
