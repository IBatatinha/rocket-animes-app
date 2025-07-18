import type { Metadata } from "next";
import "./styles/index.css";

export const metadata: Metadata = {
	title: {
		absolute: "RocketAnimes | Assista animes gratuitamente",
		default: "RocketAnimes | Assista animes gratuitamente",
		template: "RocketAnimes | %s",
	},
	description:
		"Conheça o melhor streaming gratuito de animes. Venha agora mesmo se aventurar junto da RocketAnimes no universo dos animes e veja agora mesmo animes de qualidade e sistemas inovadores para melhor imersão dos otakus.",
	icons: { icon: "/icon.svg" },
};

export default function creationRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt">
			<body className="box-border antialiased scroll-smooth text-zinc-50 bg-zinc-950 overflow-x-hidden w-screen h-full flex flex-col items-center justify-between gap-0 overflow-auto selection:bg-purple-400/30">
				{children}
			</body>
		</html>
	);
}
