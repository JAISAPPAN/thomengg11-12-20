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
                                <li><Link href="/about" passHref ><Nav.Link >About US</Nav.Link></Link></li>
                                <li><Link href="/Service" passHref ><Nav.Link >Services</Nav.Link></Link></li>  
                                <Link href="/Contact">Contact Us</Link>  
                                
                            </ul>
                        </div> 
                    
                    </Col>
                    <Col sm={2}>

                        <div>
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                
                                <NavDropdown title="Products" id="collasible-nav-dropdown">

                                    <Link href="Mct"><Button size="sm" block >Multi Cable Transit</Button></Link>

                                    <Link href="Flameproof"><Button size="sm" block>Flame Proof Products</Button></Link>
                                    <Link href="Rubbermat"><Button size="sm" block>Insulating Rubber Mats</Button></Link>
                                    <Link href="Wiresandcables"><Button size="sm" block>Wires and Cables</Button></Link>
                                    <Link href="fire_safety_items_page"><Button size="sm" block>Fire Safety Items</Button></Link>
                                    <Link href="/marine_vibration_proof_fitting_page"><Button size="sm" block>Marine Products</Button></Link>


                                </NavDropdown>

                            </ul>
                        </div>

                    </Col>

                    <Col sm={2}>

                        <div>
                            <h5>Links</h5>
                            <NavDropdown title="Technical Info" id="collasible-nav-dropdown">
                                <Link href="TechnicalOne"><Button size="sm" block >Technical Info One</Button></Link>
                                <Link href="TechnicalTwo"><Button size="sm" block >Technical Info Two</Button></Link>

                            </NavDropdown>
                        </div>

                    </Col>
                    <Col sm={3}>
                        <div>
                            <h5>Our Address</h5>
                            <h6>Thomson Engineers&Contractors</h6>
                            <address>
                                Poddar Samrudhi Evergreen Complex, Shop No.4/4,<br />
		              Kalyan -Karjat Road,<br /> Badlapur-E, Thane-District-421503<br />
                      Maharashtra-State<br />
                      India<br />
                                <i className="fa fa-phone fa-lg"></i>: +91-7738640429.<br />
                                <i className="fa fa-whatsapp fa-lg"></i>:+91-7738640429.<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mannaconsultents@gmail.com">
                                    tengineersmumbai@gmail.com</a><br/>
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:info@thomsonengineers.com">
                                    info@thomsonengineers.com</a>
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


