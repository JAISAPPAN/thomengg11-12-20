import {Container,Row,Col,Button,Figure} from 'react-bootstrap'
import Pagei from '../components/Pagei'
import Flame_proof_pdts_compo from '../components/flame_proof_pdts_compo'
import { JumboProduct } from '../components/Jumbo'

import Header from './Header'
import Footer from './Footer'

export default function Flameproof() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
            <Row><Button id="pdt_main_hdg" variant="primary" size="lg" block>FLAME PROOF ITEMS(PRODUCTS)</Button></Row>
            <Flame_proof_pdts_compo/>
            <Container>             
                            
                <Row>
                    <Col sm={{span:4, order:1}}>
                        <Row><Button id="pdt_main_hdg" variant="primary" size="lg" block>Flame Proof Items(Products)</Button></Row>
  
                        <h3 id="mct_col">IS Code: IS/IEC 60079series, EN Code: EN IEC 60079 series, IEC Code: IEC 60079 series,</h3>
                        
                        <p>We would like to introduce our products to your esteemed organisation.Our approved Engineers and Manufactures are use LM6 Aluminium, Stainless Steel (304, 304L, 316, 316L) to manufacture high quality products asper the hazardous classification.Flameproof, Weatherproof, Explosion proof enclosure. 
                        We Provide You Complete Automation Solution, Process Control Panel, Motor Control Centre 
                        Panel, Power Control Panel, VFD Panel,PLC Panel & Various Type of FLP LED Lighting</p>
                        
                       
                    
                    
                        </Col>
                    <Col sm={{ span:4, order:2}}>
                        <br /> <br /> <br />
                        <p> fixtures, 
                        device, equipment Junction Boxes, Switches…etc by engineering design, manufacture and  Authorised Lab Test CertifiedbyIndian, European and International Standards of: </p>
                        <ul>
                            <li>The Petroleum and Explosives Safety Organisation (PESO) / Chief Controller of Explosives (CCOE)&Directorate General of Mines Safety (DGMS) India -(IS Code)</li>
                            <li>CIMFR/ERDA/CPRI/ERTIL/ISM-Test Lab for Gas Group& Temp. Class, India.</li>
                            <li>ATEX (European Standard) –ATmosphericEXplosibles-(EN Code)</li>
                            <li>IEC Ex (International Standard)-International ElectrotechnicalCommission Explosive-

                                EC Code)</li>
                        </ul>
                    
                    </Col>
                    <Col sm={{ span: 4, order: 3 }}>
                        <Button id="pdt_main_hdg" variant="primary" size="lg" block>Product User Industries:</Button>
                        <p>Oil& Gas field Installation, Gas Station. Offshore Oil &Gas Platforms, Coal Mines,
                    Refineries &Petrochemicals, Chemical Plants, Fertilizer Plants, Power plants,</p>
                    </Col>
                    
                </Row>
                
                
            </Container>
           
            <Footer/>
        </div>
    )
}
























//  <Figure>
//                             <Figure.Caption>
//         Nulla vitae elit libero, a pharetra.
//                             </Figure.Caption>
//                             <Figure.Image
//                                 width={300}
//                                 height={280}
//                                 alt="171x180"
//                                 src="./flameproof/1.jpeg"
//                             />                           
//                         </Figure>
//                         <Figure>
//                             <Figure.Caption>
//             Nulla vitae elit libero, a pharetra.
//                             </Figure.Caption>
//                             <Figure.Image
//                                 width={300}
//                                 height={280}
//                                 alt="171x180"
//                                 src="./flameproof/2.jpg"
//                             />
//                         </Figure>
//                         <Figure>
//                             <Figure.Caption>
//             Nulla vitae elit libero, a pharetra.
//                             </Figure.Caption>
//                             <Figure.Image
//                                 width={300}
//                                 height={280}
//                                 alt="171x180"
//                                 src="./flameproof/3.jpeg"
//                             />
//                         </Figure>
//                         <Figure>
//                             <Figure.Caption>
//             Nulla vitae elit libero, a pharetra.
//                             </Figure.Caption>
//                             <Figure.Image
//                                 width={300}
//                                 height={280}
//                                 alt="171x180"
//                                 src="./flameproof/4.jpeg"
//                             />
//                         </Figure>
//                         <Pagei />