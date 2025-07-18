import { HeaderComponent } from "..";

type HeaderProps = {
	isLoading?: boolean;
	isCompact?: boolean;
};

export function Header({ isLoading = false, isCompact = false }: HeaderProps) {
	return (
		<HeaderComponent.Root>
			<HeaderComponent.Wrapper compact={isCompact}>
        <HeaderComponent.Logo />
      </HeaderComponent.Wrapper>
		</HeaderComponent.Root>
	);
}
