import MwtswitchsocketPdts, { MwtswitchsocketTable,INSDELHI} from '../components/MwtswitchsocketCompo'

import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


export default function Marine_water_tight_switch_socket() {
    return (
        <div>
        <Header/>
        <JumboProduct/>
            <Row>
                <Col className={style.wt_switch_sidebar}sm={{ span: 3 }}>
                    <SideBar />
                </Col>
                <Col sm={{ span: 9 }}>
                    <MwtswitchsocketPdts />
                    <INSDELHI className="switch_socket_fill" />
                </Col>
            </Row>
        
            
            <MwtswitchsocketTable/>
            <Footer/>
        </div>
    )
}
