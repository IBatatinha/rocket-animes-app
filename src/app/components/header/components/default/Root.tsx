import type { ComponentProps } from "react";

interface RootProps extends ComponentProps<"header"> {}

export function Root(props: RootProps) {
	return (
		<header
			className="h-15 w-full sticky top-0 backdrop-blur-md"
			{...props}
		/>
	);
}
