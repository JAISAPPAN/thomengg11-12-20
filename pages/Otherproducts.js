import Header from './Header'
import Footer from './Footer'
import {Jumbotron,Button} from 'react-bootstrap'
//import OtherPdts from '../components/OtherPdts'
//import MwtpPdts, { MwtpTable} from '../components/Mwtplug'
import MwtsocketPdts, { MwtsocketTable} from '../components/MwtsocketCompo'
import MwtswitchsocketPdts, { MwtswitchsocketTable } from '../components/MwtswitchsocketCompo'
import Marine_deck_light_well_glass_light_fitting_Pdts, 
{ Marine_deck_light_well_glass_light_fitting_Table} 
from '../components/marine_deck_light-well_glass_light_fitting_compo'
import Led_well_glass_deck_light_fitting_Pdts,
{ Led_well_glass_deck_light_fitting_Table, Led_well_glass_deck_light_fitting_spec_Table} 
from '../components/led_well_glass_deck_light_fitting_compo'

export default function Otherproducts()
{
    return (
        <div>
            <Header />
            <Jumbotron id="abtjumbo">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <div className="headerbottom">
                <h1>Other Products Page</h1>
                
            </div>
           
            
            <MwtsocketPdts/>
            <MwtsocketTable/>
            <MwtswitchsocketPdts />
            <MwtswitchsocketTable />
            <Marine_deck_light_well_glass_light_fitting_Pdts/>
            <Marine_deck_light_well_glass_light_fitting_Table/>
            <Led_well_glass_deck_light_fitting_Pdts/>
            <Led_well_glass_deck_light_fitting_Table/>
            <Led_well_glass_deck_light_fitting_spec_Table/>
            <Footer />
        </div>
    )
}