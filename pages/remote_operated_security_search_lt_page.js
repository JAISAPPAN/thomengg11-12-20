import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import Remote_operate_serurity_search_lt_One, {Remote_operate_serurity_search_lt_Two, Remote_operate_serurity_search_Tbl2, 
    Remote_operated_serurity_search_lt_Table2, Remote_operated_serurity_search_lt_Table3}
from '../components/remote_operated_security_search_lt_compo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


export default function Remote_operated_security_search_lt_page() {
    return (
        <div>
            <h1>MARINE REMOTE OPERATED SECURITY SEARCH LIGHT</h1>
            <Header />
            <JumboProduct />
            <Row>
            <Col sm={3}><SideBar/></Col>
                <Col sm={9}><Remote_operate_serurity_search_lt_One /></Col>
            </Row>
            <Remote_operate_serurity_search_lt_Two />
            <Remote_operate_serurity_search_Tbl2/>
            <Remote_operated_serurity_search_lt_Table2/>
            <Remote_operated_serurity_search_lt_Table3/>
            <Footer />
        </div>
    )
}

