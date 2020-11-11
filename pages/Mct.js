import {Container,Row,Col,Image} from 'react-bootstrap'
import Header from './Header'
import {JumboProduct} from '../components/Jumbo'
import Footer from './Footer'
import Mctpdts from '../components/Mctpdts'

export default function Mct() {
    return (
        <div>
        
            <Header />
            <JumboProduct/>
        
        
            <div className="headerbottom">
            <Container>
            <Row>
                        <Mctpdts />
            </Row>
            <Row>
            <Col sm={12}>
            
            </Col>
            
            </Row>
            <Row>
            <Col id="mct_col" sm={6}>
                  <h1>Multi Cable Transit(MCT) Oroducts</h1>        
            </Col>
                 <Col id="mct_col" sm={6}> <h1>Applications</h1></Col>
            </Row>
                <Row id="one">
                    <Col sm={6}>
                    
                            <h3 id="mct_col" >IEC-60079,60364,60529,50262 Standards.</h3>
                    <p>These Ex cable and pipe transits are used in high-risk maritime, offshore and land-based environments to minimize danger by preventing the spread of fire, water, gas, chemicals and other hazards substances.</p>
                    <p>The system consists of a round rubber frame (RGP Ex) and rubber blocks. The RGP Ex is assembled in sleeves, pipes, drilled or cast holes and packed with rubber blocks suited for each cable and pipe dimension. The compression bolts are tightened to compress the rubber blocks against cables and pipes to establish a tight seal.</p>
                    <p>We provide different type and sizes of MCT from approved Indian manufactures for local and International customers who are maintain latest standards, Quality and Certification.</p>
                    
                    
                    
                    </Col>
                    <Col sm={6}>
                            <div id="two">
                           

                            <ul>
                                <li>Power Substations</li>
                                <li>Transformer Substations</li>
                                <li>Airport, Metro, Clean Room & Data Centres</li>
                                <li>Marine, Offshore, Oil & Gas Plants</li>
                                <li>Petrochemical Plants</li>
                                <li>Telecom Applications and Transmission Tower</li>
                                <li>Wind and Offshore Applications</li>

                            </ul>
                            </div>
                    </Col>
                </Row>
                
            </Container>
            </div>
            <Footer/>
            
        </div>
    )
}
