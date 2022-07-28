import React from "react";

const CardService = (props: any) => {
	const { icon, name, desc } = props;
	return (
		<div className="rounded opacity-80 bg-sky-900 shadow-sm m-4 lg:m-8 flex-col lg:w-4/5 ">
			<div className="flex ">
				<span className="text-3xl mr-4 mt-5 lg:mt-2 lg:ml-2">{icon}</span>
				<div className="font-bold text-4xl mb-2 ">
					<span className="text-white text-base md:text-2xl text-sm">
						{name}
					</span>
					<p className="text-sm">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default CardService;
