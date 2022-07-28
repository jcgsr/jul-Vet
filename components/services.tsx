import React from "react";

import { FaDog } from "react-icons/fa";
import { RiTestTubeFill, RiHotelLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { GiSittingDog } from "react-icons/gi";

import CardService from "./card-service";

import { motion } from "framer-motion";

const Services = () => {
	let services = [
		{
			name: "Consultas",
			icon: <IoIosTimer />,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam error maxime deleniti pariatur unde ad adipisci quidem aperiam! Officia esse, ad temporibus nihil illum deleniti recusandae corrupti, necessitatibus quo!",
		},
		{
			name: "Exames",
			icon: <RiTestTubeFill />,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam error maxime deleniti pariatur unde ad adipisci quidem aperiam! Officia esse, ad temporibus nihil illum deleniti recusandae corrupti, necessitatibus quo!",
		},
		{
			name: "Hotel",
			icon: <RiHotelLine />,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam error maxime deleniti pariatur unde ad adipisci quidem aperiam! Officia esse, ad temporibus nihil illum deleniti recusandae corrupti, necessitatibus quo!",
		},
		{
			name: "Adestramento",
			icon: <GiSittingDog />,
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam error maxime deleniti pariatur unde ad adipisci quidem aperiam! Officia esse, ad temporibus nihil illum deleniti recusandae corrupti, necessitatibus quo!",
		},
	];

	return (
		<section className="bg-slate-900" id="services">
			<h1 className="text-3xl font-bold text-center py-8">
				Nossos Serviços
			</h1>

			<div className="flex flex-col xl:flex-row">
				{services.map((service) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						key={service.name}
						className="text-white "
					>
						<CardService
							icon={service.icon}
							name={service.name}
							desc={service.desc}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Services;
