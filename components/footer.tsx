import Image from "next/image";
export default function Footer() {
	return (
		<footer className="flex h-36 w-full items-center justify-center border-t">
			<a
				className="flex items-center justify-center mb-6 pb-2 gap-2"
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{" "}
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</a>
		</footer>
	);
}
