import Marine_industrial_hand_lamp_Pdt1, { Marine_industrial_hand_lamp_Pdt2, 
    Marine_industrial_hand_lamp_Tbl1, 
    Marine_industrial_hand_lamp_Tbl2, Marine_industrial_hand_lamp_Tbl3}
from '../components/marine_industrial_hand_lamp_compo'
import Jumbo_Ajmera from '../components/jumbo_Ajmera_compo'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct_Ajmera } from '../components/Jumbo'


export default function Marine_industrial_hand_lamp_page() {
    return (
        <div>
            <Header/>
            <JumboProduct_Ajmera />
            <Jumbo_Ajmera />
            <Marine_industrial_hand_lamp_Pdt1/>
            <Marine_industrial_hand_lamp_Tbl1 />
            <Marine_industrial_hand_lamp_Pdt2/>
            
            <Marine_industrial_hand_lamp_Tbl2/>
            <Marine_industrial_hand_lamp_Tbl3/>
            <Footer/>
        </div>
    )
}
