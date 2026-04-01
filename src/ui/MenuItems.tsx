
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

type MenuItemsProps = {
   appName: string;
   appName2: number;
}

function MenuItems({ appName, appName2 }: MenuItemsProps) {
   const navigate = useNavigate();

   return (
      <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
            <Navbar.Brand href="/">{appName}{appName2}</Navbar.Brand>
            <Nav className="me-auto">
               <NavDropdown title={`기본 연습`}>
                  <NavDropdown.Item onClick={() => navigate(`/fruit`, { state: { id: 1, name: "item" } })}>과일 1개</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate(`/fruitList`)}>과일 목록</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate(`/coffee`)}>커피 한잔</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate(`/coffeeList`)}>커피 목록</NavDropdown.Item>
               </NavDropdown>
            </Nav>
         </Container>
      </Navbar >
   );
}

export default MenuItems;