import React from "react";
import Link from "next/link";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { motion } from "framer-motion";

const Contacts = () => {
	let contacts = [
		{ name: "whats", icon: <FaWhatsapp />, link: "#" },
		{ name: "insta", icon: <FaInstagram />, link: "#" },
		{
			name: "mail",
			icon: <AiOutlineMail />,
			link: "mailto:cabralguerra@gnail.com",
		},
	];
	return (
		<section className="bg-white flex flex-col">
			<h1 className="text-orange-900 text-center my-8 text-3xl font-bold text-center py-8">
				Nossos Contatos
			</h1>
			<div
				id="contacts"
				className="flex justify-around text-orange-900  flex-row mb-10 text-6xl md:text-7xl cursor-pointer"
			>
				{contacts.map((contact) => (
					<Link
						className="hover:text-slate-900 ease-in-out duration-300"
						key={contact.name}
						href={contact.link}
					>
						{contact.icon}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Contacts;
