import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'

import Marine_water_tight_plug_compo, { Marine_water_tight_plug_Tbl} from '../components/marine_water_tight_plug_compo'

export default function Marine_water_tight_plug_page() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
            <Row>
            <Col sm={{span:3}}>
                <SideBar />
            </Col>
            <Col sm={{span:9}}>
                <Marine_water_tight_plug_compo />
            </Col>
            </Row>            
            
            <Marine_water_tight_plug_Tbl/>
            <Footer/>
        </div>
    )
}
