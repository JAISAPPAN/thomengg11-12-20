import {Row,Col,Image} from 'react-bootstrap'
import Marine_flood_light_fitting_Pdt1, { Marine_flood_light_fitting_Pdt2, 
    Marine_flood_light_fitting_Tbl1, Marine_flood_light_fitting_Tbl2, INSVIRAT} 
    from '../components/marine_flood_light_fitting_compo'
import Header from './Header';
import Footer from './Footer'

import { JumboProduct } from '../components/Jumbo'
import SideBar from '../components/SideBarTest'

export default function Marine_flood_light_fitting_page() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
            <Row>
                <Col sm={3}><SideBar />
            </Col>
                <Col sm={9}><Marine_flood_light_fitting_Pdt1 />
                    <INSVIRAT/>
                </Col>
            </Row>
            
            
            <Marine_flood_light_fitting_Tbl1/>
            <Marine_flood_light_fitting_Pdt2 />
            <Marine_flood_light_fitting_Tbl2/>
            <Footer/>
        </div>
    )
}
