import Header from './Header'
import Footer from './Footer'
import {JumboProduct} from '../components/Jumbo'
import Marine_water_tight_switch, { Marine_water_tight_switch_Tbl} from '../components/marine_water_tight_switch_compo'
import { Row,Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


export default function Marine_water_tight_switch_Page() {
    return (
        <div>
        <Header/>
        <JumboProduct/>
        <Row>
                <Col sm={{ span: 4 }}><SideBar /></Col>
                <Col sm={{ span: 8 }}><Marine_water_tight_switch /></Col>
        </Row>
        
            
            <Marine_water_tight_switch_Tbl/>
        <Footer/>
            
        </div>
    )
}
