
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ComponentProps<"button"> {
	asChild?: boolean;
}

export function Button({ asChild, ...props }: ButtonProps) {
	const Component = asChild ? Slot : "button";
	return <Component className="h-full flex items-center px-[1.125rem] hover:brightness-[12] transition-all" title={props.title} {...props} />;
}
