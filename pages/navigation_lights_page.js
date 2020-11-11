import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'

import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


export default function Navigation_lights() {
    return (
        <div>
            <h1>MARINE NAVIGATION LIGHTS</h1>
            <Header />
            <JumboProduct />
            <Footer />
        </div>
    )
}


