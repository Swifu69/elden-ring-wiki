import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
	link: string;
	name: string;
	[variant: string]: string;
}

export function NavLink({ link, name }: Props) {
	return (
		<LinkContainer to={link}>
			<Nav.Link>{name}</Nav.Link>
		</LinkContainer>
	);
}

export function BtnLink({ link, name, variant }: Props) {
	return (
		<LinkContainer to={link}>
			<Button variant={variant}>{name}</Button>
		</LinkContainer>
	);
}
