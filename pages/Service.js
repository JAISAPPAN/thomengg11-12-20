import {Row,Button} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import ServiceAreasPdt ,{ ServiceAreasTbl } from '../components/ServiceAreas'
import { JumboAbout } from '../components/Jumbo'
import style from '../styles/Home.module.css'

export default function Service() {
    return (
        <div>
        <Header/>
        <JumboAbout className={style.jumboAbout}/>          
           
            <Row><Button id="pdt_main_hdg" variant="primary" size="lg" block>OUR SERVICES</Button></Row>
            <Row><Button id="pdt_main_hdg" variant="success" size="lg" block>Electrical Services, Instrument Services, Fire Safety Services And Mechanical Jobs</Button></Row>
                 
                   
            
            <ServiceAreasPdt/>
        <Footer/>
        </div>
    )
}

// <div className="headerbottomnojumbo">