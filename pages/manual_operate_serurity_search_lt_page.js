import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import Manual_operate_serurity_search_lt, 
{ Manual_operate_serurity_search_lt_Table1, Manual_operate_serurity_search_lt_Table2, Manual_operate_serurity_search_lt_Table3}
from '../components/manual_operate_serurity_search_lt_combo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'

export default function Manual_operate_serurity_search_lt_page() {
    return (
        <div>
            <h1>MARINE MANUAL OPERATED SECURITY SEARCH LIGHT</h1>
            <Header/>
            <JumboProduct/>
            <Row>
            <Col sm={3}><SideBar/></Col>
                <Col sm={9}><Manual_operate_serurity_search_lt /></Col>
            </Row>
            
            <Manual_operate_serurity_search_lt_Table1/>
            <Manual_operate_serurity_search_lt_Table2/>
            <Manual_operate_serurity_search_lt_Table3/>
            <Footer/>
        </div>
    )
}
