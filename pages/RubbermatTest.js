import {Container,Row,Col,Jumbotron,Button} from 'react-bootstrap'
import Table1rmat from '../components/Table1rmat'
import Table2rubbermat from './Table2rubbermat'
import Header from './Header';
import Footer from './Footer'

export default function Rubbermat() {
    return (
        <div>
            
         
                 
            <div className="headerbottom">
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>Insulating Rubber Mats Product</h1>
                        <h3>ELECTRICAL INSULATING MATTING / ELECTRICAL SWITCHBOARD MATTING</h3>
                        <p>Electrical insulating matting of rubber covered under IEC 61111 is made of rubber compound suitable for providing the electrical safety to the workmen working around the possible areas of electrical shock. It is specially designed for use in front and rear side of electrical switchboards, High voltage equipments and act as a safeguard equipment from electrical shock due to leakage of current, shot circuit or any other.</p>
                        <p>Application- In power generation plants, sub-stations, commercial buildings, industrial sheds, marine applications and any other area of electrical shock prone.</p>

                    
                    
                    </Col>
                    <Col sm={5}>
                    <div>
                        <h3>Features</h3>
                        <ul>
                                <li>ISI Marked, IS: 5424/1969 ERDA& CPRI Type Tested insulating mats.</li>
                                <li>Tests and specifications also meet BS 921, IEC 61111, ASTM.</li>
                                <li>For both A.C. and D.C. applications.</li>
                                <li>Di-electric Strength 65KV (650000volts)</li>
                                <li>AC proof Voltage up to 36KV.</li>
                                <li>Low Temperature resistant.</li>
                                <li>Acid, Alkali,Diesel& Transformer oil resistant.</li>
                                <li>Flame Retardant.</li>
                                <li>Good Aging properties.</li>
                                <li>High Insulation resistance exceeding 1100000</li>
                                <li>High tensile strength and elongation properties.</li>
                                <li>Leakage Current less than 1mA.</li>
                        </ul>
                    </div>
                    
                    
                    </Col>
                </Row>
               
                
            </Container>
            </div>
                
        
            
        </div>
    )
}
