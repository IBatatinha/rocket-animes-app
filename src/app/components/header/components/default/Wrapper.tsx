import type { ComponentProps } from "react";

interface WrapperProps extends ComponentProps<"div"> {
	compact: boolean;
}

export function Wrapper({ compact, ...props }: WrapperProps) {
	return (
		<div
			data-compact={compact}
			className="w-full h-full flex data-[compact=true]:justify-center items-center flex-row gap-0"
			{...props}
		/>
	);
}
