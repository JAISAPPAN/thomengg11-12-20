import MwtswitchsocketPdts, { MwtswitchsocketTable} from '../components/MwtswitchsocketCompo'
import style from '../styles/Home.module.css'
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
                <Col sm={{ span: 3 }}>
                    <SideBar />
                </Col>
                <Col sm={{ span: 9 }}>
                    <MwtswitchsocketPdts />
                   
                </Col>
            </Row>
        
            
            <MwtswitchsocketTable/>
            <Footer/>
        </div>
    )
}
