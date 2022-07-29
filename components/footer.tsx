import Image from "next/image";
export default function Footer() {
	return (
		<footer className="flex bg-orange-800 text-white  h-56 items-center justify-center flex-col">
			<p className="-mt-20 ">&copy; 2022 - Clínica Afetto</p>
			<p className="text-sm pt-2">Todos os Direitos Reservados</p>
		</footer>
	);
}
