import React from "react";

const Card = (props: any) => {
	return (
		<div className="rounded opacity-60 absolute sm:w-1/2 z-20 md:left-12 left-2 right-2 shadow-sm  bg-gray-700">
			<div className="px-6 py-2 ">
				<div className="font-bold text-4xl text-orange-500 mb-2">
					Afetto
				</div>
				<p className="text-white text-base md:text-2xl text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptatibus quia, Nonea! Maiores et perferendis eaque,
					exercitationem praesentium nihil.
				</p>
			</div>
		</div>
	);
};

export default Card;
