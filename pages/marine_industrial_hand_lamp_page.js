import Marine_industrial_hand_lamp_Pdt1, { Marine_industrial_hand_lamp_Pdt2, 
    Marine_industrial_hand_lamp_Tbl1, 
    Marine_industrial_hand_lamp_Tbl2, Marine_industrial_hand_lamp_Tbl3}
from '../components/marine_industrial_hand_lamp_compo'
import {Row,Col} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct} from '../components/Jumbo'
import SideBar from '../components/SideBarTest'


export default function Marine_industrial_hand_lamp_page() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
            <Row>
                <Col sm={3}><SideBar /></Col>
                <Col sm={9}> <Marine_industrial_hand_lamp_Pdt1 /></Col>
            </Row>
           
            <Marine_industrial_hand_lamp_Tbl1 />
            <Marine_industrial_hand_lamp_Pdt2/>
            
            <Marine_industrial_hand_lamp_Tbl2/>
            <Marine_industrial_hand_lamp_Tbl3/>
            <Footer/>
        </div>
    )
}
