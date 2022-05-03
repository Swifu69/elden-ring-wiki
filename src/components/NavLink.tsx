import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface Props {
    link: string,
    name: string
}

function NavLink ({link, name}:Props) {
    return(
        <LinkContainer to={link}>
        <Nav.Link>{name}</Nav.Link>
        </LinkContainer>
    )
}

export default NavLink
