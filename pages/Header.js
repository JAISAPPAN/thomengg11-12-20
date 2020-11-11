import {Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap';
import Link from 'next/link'

export default function Header() {
    return (
        <div>
        
            <Navbar bg="primary" variant="dark" fixed="top">
                
                    <Navbar.Brand href="/"><img class="logo" src="/logo.jpg"/></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Link href="/"><Button size="lg block" >Home</Button></Link>
                    <Link href="/About"><Button size="lg block">About Us</Button></Link>
                    <Link href="/Service"><Button size="lg block">Services</Button></Link>
                    <Link href="/marine_vibration_proof_fitting_page"><Button size="lg block">Marine Products</Button></Link>
                    

                    <NavDropdown title={<Button size="lg block">Products</Button>} id="collasible-nav-dropdown">
                        
                        <Link href="Mct"><Button size="sm" block >Multi Cable Transit</Button></Link>
                        <Link href="Flameproof"><Button size="sm" block>Flame Proof Products</Button></Link>
                        <Link href="Rubbermat"><Button size="sm" block>Insulating Rubber Mats</Button></Link>
                        <Link href="Wiresandcables"><Button size="sm" block>Wires and Cables</Button></Link>
                                          
                       
                    </NavDropdown>
                    

                    <NavDropdown title={<Button size="lg block">Technical Info</Button>} id="collasible-nav-dropdown">
                        <Link href="TechnicalOne"><Button size="sm" block >Technical Info One</Button></Link>
                            <Link href="TechnicalTwo"><Button size="sm" block >Technical Info Two</Button></Link>

                    </NavDropdown>
                    <NavDropdown title={<Button size="lg block">Ajmera</Button>} id="collasible-nav-dropdown">
                        <Link href="ajmera_marine_nav_light_page"><Button size="sm" block >NAVIGATION LIGHT</Button></Link>
                        <Link href="marine_industrial_hand_lamp_page"><Button size="sm" block >HAND LAMP</Button></Link>
                        <Link href="marine_water_junction_box_page"><Button size="sm" block >JUNCTION BOX</Button></Link>

                    </NavDropdown>
                    



                   
                    
                    <Link href="/Contact"><Button size="lg block">Contact Us</Button></Link>
                    </Nav>
                    
                
            </Navbar>
                
            
        </div>
    )
}
// <Link href="/Exports"><Button size="lg block"> Exports</Button></Link>

// <Navbar bg="primary" variant="dark" fixed="top">
//     <Navbar.Brand href="/"><img class="logo" src="/logo.jpg" /></Navbar.Brand>
//     <Nav className="mr-auto">
        // <Nav.Link href="/">Home</Nav.Link>
        // <Nav.Link href="/About">About US</Nav.Link>
        // <Nav.Link href="/Service">Services</Nav.Link>


//         <NavDropdown title="Products" id="collasible-nav-dropdown">
//             <NavDropdown.Item href="Mct">Multi Cable Transit</NavDropdown.Item>
//             <NavDropdown.Item href="Flameproof">Flame Proof Products</NavDropdown.Item>
//             <NavDropdown.Item href="Rubbermat">Insulating Rubber Mats</NavDropdown.Item>

//             <NavDropdown.Item href="Wireandcables">Wires and Cables</NavDropdown.Item>
//             <NavDropdown.Item href="Otherproducts">Other Products</NavDropdown.Item>
//         </NavDropdown>

        // <NavDropdown title="Technical Info" id="collasible-nav-dropdown">
        //     <NavDropdown.Item href="TechnicalOne">Technical Info One </NavDropdown.Item>
        //     <NavDropdown.Item href="TechnicalTwo">Technical Info Two </NavDropdown.Item>

        // </NavDropdown>




//         <Nav.Link href="/Exports">Exports</Nav.Link>

//         <Nav.Link href="/Contact">Contact Us</Nav.Link>
//     </Nav>
//     <Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-light">Search</Button>
//     </Form>
// </Navbar>