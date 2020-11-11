import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'

export default function Junction_box_page() {
    return (
        <div>
            <h1>Junction Box Page</h1>
            <Header />
            <JumboProduct />
            <Footer />
        </div>
    )
}



         