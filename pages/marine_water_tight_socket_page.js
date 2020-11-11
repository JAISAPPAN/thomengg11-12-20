import MwtsocketPdts, { MwtsocketTable } from '../components/MwtsocketCompo'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


export default function Marine_water_tight_plug_page()
{
    return (
        <div>
            <Header />
            <JumboProduct />
            <Row>
                <Col sm={{ span: 3 }}>
                    <SideBar />
                </Col>
                <Col sm={{ span: 9 }}>
                    <MwtsocketPdts />
                </Col>
            </Row>

            <MwtsocketTable/>
            <Footer />
        </div>
    )
}