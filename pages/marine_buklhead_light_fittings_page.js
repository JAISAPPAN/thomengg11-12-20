
import Header from './Header'
import {JumboIndex, JumboProduct} from '../components/Jumbo'
import SideBar from '../components/SideBarTest'


// import Mblf_Pdts1, { Mbblf_Table1, Mblf_Pdts2, Mbblf_Table2} from '../components/OtherPdts/Marine_buklhead_light_fittings_compo'
import Mblf_Pdts1, { Mbblf_Table1, Mblf_Pdts2, Mbblf_Table2, Marine_buklhead_light_fittings_Pdt_Sepc} 
from '../components/OtherPdts/Marine_buklhead_light_fittings_compo copy'
import Footer from './Footer'
import {Row,Col} from 'react-bootstrap'

export default function Marine_buklhead_light_fittings_Page() {
    return (
        <div>
            <Header/>
            <JumboProduct/>
            <Row>
                <Col sm={3}>
                    <SideBar/>
                </Col>
                <Col sm={9}><Mblf_Pdts1 /></Col>
            </Row>
            
            <Mbblf_Table1/>
            <Mblf_Pdts2 />
            <Mbblf_Table2/>
            <Marine_buklhead_light_fittings_Pdt_Sepc/>
            <Footer/>
        </div>
    )
}
