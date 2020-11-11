
import Ajmera_marine_nav_light_Pdt_one, { Ajmera_marine_nav_light_Pdt_two, 
    Ajmera_marine_nav_light_Pdt_three, Ajmera_marine_nav_light_Pdt_four,Scope, SpecTable} 
    from '../components/ajmera_marine_nav_light_compo'
import Jumbo_Ajmera from '../components/jumbo_Ajmera_compo'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct_Ajmera } from '../components/Jumbo'

export default function Ajmera_marine_nav_light_page() {
    return (
        <div>
            <Header/>
            <JumboProduct_Ajmera/>
            <Jumbo_Ajmera/>
            <Ajmera_marine_nav_light_Pdt_one/>
            <Ajmera_marine_nav_light_Pdt_two/>
            <Ajmera_marine_nav_light_Pdt_three />
            <Ajmera_marine_nav_light_Pdt_four />
            <Scope/>
            <SpecTable/>
            <Footer/>
        </div>
    )
}
