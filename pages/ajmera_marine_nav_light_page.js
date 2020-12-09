
import Ajmera_marine_nav_light_Pdt_one, { Ajmera_marine_nav_light_Pdt_two, 
    Ajmera_marine_nav_light_Pdt_three, Ajmera_marine_nav_light_Pdt_four,Scope, SpecTable} 
    from '../components/ajmera_marine_nav_light_compo'
//import Jumbo_Ajmera from '../components/jumbo_Ajmera_compo'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import SideBar from '../components/SideBarTest'
import {Row,Col} from 'react-bootstrap'

export default function Ajmera_marine_nav_light_page() {
    return (
        <div>
            <Header/>
            <JumboProduct />
            <Row>
                <Col sm={3}><SideBar /></Col>
                <Col sm={9}><Ajmera_marine_nav_light_Pdt_one /></Col>
            </Row>
            
           
            
            <Ajmera_marine_nav_light_Pdt_two/>
            <Ajmera_marine_nav_light_Pdt_three />
            <Ajmera_marine_nav_light_Pdt_four />
            <Scope/>
            <SpecTable/>
            <Footer/>
        </div>
    )
}
