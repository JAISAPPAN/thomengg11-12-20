
import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import Marine_deck_light_well_glass_light_fitting_Pdts,
{ Marine_deck_light_well_glass_light_fitting_Table }
    from '../components/marine_deck_light-well_glass_light_fitting_compo'
import Led_well_glass_deck_light_fitting_Pdts,
{ Led_well_glass_deck_light_fitting_Table, Led_well_glass_deck_light_fitting_spec_Table} from '../components/led_well_glass_deck_light_fitting_compo'
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
                    <Marine_deck_light_well_glass_light_fitting_Pdts />
                </Col>
            </Row>

            
            <Marine_deck_light_well_glass_light_fitting_Table />
            <Led_well_glass_deck_light_fitting_Pdts/>
            <Led_well_glass_deck_light_fitting_Table/>
            <Led_well_glass_deck_light_fitting_spec_Table/>
            <Footer />
        </div>
    )
}