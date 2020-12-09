import Mbblf_Pdts1, { Mbblf_Table1, Mbblf_Pdts2, Mbblf_Tbl2, MarineBunk_Para} from '../components/OtherPdts/Marine_bunk_birth_light_fitting' 
import Header from './Header';
import Footer from './Footer'

import { JumboProduct } from '../components/Jumbo'
import {Row,Col} from 'react-bootstrap'
import SideBar from '../components/SideBarTest'

export default function Marine_bunk_birth_light_fitting() {
    return (
        <div>
        <Header/>
        <JumboProduct/>
        <Row>
            <Col sm={{span:3}}><SideBar/></Col>
                <Col><Mbblf_Pdts1 />
                    <br /><br /><br /><br /><br />
                    <MarineBunk_Para />
                </Col>
        </Row>
            
            <Mbblf_Table1/>
            <Mbblf_Pdts2/>
            <Mbblf_Tbl2/>
            
            <Footer/>
        </div>
    )
}
