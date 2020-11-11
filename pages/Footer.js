import {Nav,Navbar,Container,Row,Col,NavDropdown,Button} from 'react-bootstrap'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer">
            <Container >
                <Row>
                    <Col sm={2}>
                    
                        <div>
                            <h5 id="footer_h5">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link href="/" passHref><Nav.Link>Home</Nav.Link></Link></li> 
                                <li><Link href="/About" passHref ><Nav.Link >About US</Nav.Link></Link></li>
                                <li><Link href="/Service" passHref ><Nav.Link >Services</Nav.Link></Link></li>  
                                <li><Link href="/marine_vibration_proof_fitting_page" passHref ><Nav.Link >Marine Products</Nav.Link></Link></li>  
                                
                            </ul>
                        </div> 
                    
                    </Col>
                    <Col sm={2}>

                        <div>
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                
                                <NavDropdown title="Products" id="collasible-nav-dropdown">
                                    <Link href="Mct" passHref><NavDropdown.Item >Multi Cable Transit</NavDropdown.Item></Link>
                                    <Link href="Flameproof" passHref><NavDropdown.Item >Flame Proof Products</NavDropdown.Item></Link>
                                    <Link href="Rubbermat" passHref><NavDropdown.Item >Insulating Rubber Mats</NavDropdown.Item></Link>
                                    <Link href="Wireandcables" passHref><NavDropdown.Item >Wires and Cables</NavDropdown.Item></Link>
                                    <Link href="Otherproducts" passHref><NavDropdown.Item >Other Products</NavDropdown.Item></Link>
                                </NavDropdown>


                            </ul>
                        </div>

                    </Col>

                    <Col sm={2}>

                        <div>
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <NavDropdown title="Technical Info" id="collasible-nav-dropdown">
                                    <Link href="TechnicalOne" passHref><NavDropdown.Item >Technical Info One </NavDropdown.Item></Link>
                                    <Link href="TechnicalTwo" passHref><NavDropdown.Item >Technical Info Two </NavDropdown.Item></Link>

                                </NavDropdown>
                                
                                <li><Link href="/Exports" passHref><Nav.Link>Exports</Nav.Link></Link></li>
                                <li><Link href="Technical" passHref><Nav.Link >Technical Info</Nav.Link></Link></li>
                                <li><Link href="/Contact" passHref><Nav.Link >Contact Us</Nav.Link></Link></li>

                            </ul>
                        </div>

                    </Col>
                    <Col sm={3}>
                        <div>
                            <h5>Our Address</h5>
                            <h6>Thomson Engineers&Contractors</h6>
                            <address>
                                Poddar Samrudhi Evergreen Complex (Near Gate No.1),<br />
		              Kalyan -Karjat Road,<br /> Badlapur-E, Thane-District-421503<br />
                      Maharashtra-State<br />
                      India<br />
                                <i className="fa fa-phone fa-lg"></i>: +91-7738640429.<br />
                                <i className="fa fa-whatsapp fa-lg"></i>:+91-7738640429.<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mannaconsultents@gmail.com">
                                    tengineersmumbai@gmail.com</a>
                            </address>
                        </div>
                    
                    </Col>
                    <Col sm={3}>
                    
                        <div>
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    
                    </Col>
                </Row>
                <Row>
                    <div className="copyright">
                       
                            <p>© Copyright 2020 Manna Software</p>
                        
                    </div>
                </Row>
               
            </Container>
            
            
        </div>
    )
}



// <li><Link to="/aboutus">About Us</Link></li>
//                                 <li><Link to="/menu">Menu</Link></li>
//                                 <li><Link to="/contactus">Contact Us</Link></li>
