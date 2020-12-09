import Marine_water_junction_box, { Marine_water_junction_box_compo1} 
from "../components/marine_water_junction_box_compo"

import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import SideBar from '../components/SideBarTest'
import {Row,Col} from 'react-bootstrap'
export default function Marine_water_junction_box_page() {
    return (
        <div>
            <Header />
            <JumboProduct/>
            <Row>
            <Col sm={3}><SideBar/></Col>
                <Col sm={9}><Marine_water_junction_box /></Col>
            </Row>
            
            <Marine_water_junction_box_compo1/>
            <Footer/>
        </div>
    )
}

//<JumboProduct_Ajmera />