import Marine_water_junction_box, { Marine_water_junction_box_compo1} from "../components/marine_water_junction_box_compo"
import Jumbo_Ajmera from '../components/jumbo_Ajmera_compo'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct_Ajmera } from '../components/Jumbo'
export default function Marine_water_junction_box_page() {
    return (
        <div>
            <Header />
            <JumboProduct_Ajmera />
            <Jumbo_Ajmera />
            <Marine_water_junction_box/>
            <Marine_water_junction_box_compo1/>
            <Footer/>
        </div>
    )
}
