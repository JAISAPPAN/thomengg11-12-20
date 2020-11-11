import Mvpf_Pdts1, { Marine_vibration_proof_fitting_Tbl_one,
    Marine_vibration_proof_fitting_Tbl_two, Mvpf_Table1,
    Marine_vibration_proof_fitting_Tbl_three, Mvpf_Pdts2, arine_vibration_proof_fitting_Tbl_four,
    Mvpf_Table2, Mvpf_Table3
} from '../components/OtherPdts/Marine_vibration_proof_fitting'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import { JumboProduct } from '../components/Jumbo'
import SideBar from '../components/SideBarTest'

export default function Marine_vibration_proof_fitting_page() {
    return (
        <div>
        
            <Header />
            <JumboProduct />
            
            <Container>
        <Row>
            <Col sm={{ span:3, order: 1 }}>
                <SideBar/>
            </Col>
                   
                        <Col sm={{ span: 9, order: 1 }}>
                        
                        <Row><Mvpf_Pdts1 /></Row>
                        <br/>
                        <Row><Mvpf_Table1 /></Row>
                            

                        </Col>
            
            
        </Row>
               
                
               
        </Container>
            <Mvpf_Pdts2 />   
            <Mvpf_Table2 />
       
            
           
            
            
           
            
            <Mvpf_Table3 />
            <Footer/>

        </div>
    )
}
