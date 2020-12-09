import {Row,Col,Image} from 'react-bootstrap'
import Marine_decorative_light_fitting_Pdt1, { Marine_decorative_light_fitting_Pdt2, 
    Marine_ecorative_light_fitting_Tbl1, Marine_ecorative_light_fitting_Tbl2, 
    Marine_ecorative_light_fitting_Tbl3}
    from '../components/marine_decorative_light_fitting_compo'
import Header from './Header';
import Footer from './Footer'
//import SideBar from '../components/SideBarTest';
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
                <Col sm={9}><Marine_decorative_light_fitting_Pdt1 />
                   
                </Col>
            </Row>
            
            
            <Marine_ecorative_light_fitting_Tbl1/>
            <Marine_decorative_light_fitting_Pdt2 />
            <Marine_ecorative_light_fitting_Tbl2/>
            <Marine_ecorative_light_fitting_Tbl2/>
            <Footer/>
        </div>
    )
}
