import Header from './Header';
import Footer from './Footer'

import { JumboProduct } from '../components/Jumbo'
import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBarTest'


import Aviation_light_fitting_compo, { Aviation_light_fitting1, Aviation_light_fitting2} from '../components/aviation_light_fitting_compo'

export default function Aviation_light_fitting_pages() {
    return (
        <div>
            <Header />
            <JumboProduct />
            <SideBar/>

            <Aviation_light_fitting_compo/>
            <Aviation_light_fitting1/>
            <Aviation_light_fitting1/>

            <Footer />
        </div>
    )
}
