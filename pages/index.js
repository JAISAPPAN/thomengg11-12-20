
import Header from './Header'
import { Container,Row,Col,Carousel} from 'react-bootstrap'
import {JumboIndex} from '../components/Jumbo';
import Footer from './Footer'




export default function index() {
  return (
    <div>
      <Header/>
      <JumboIndex/>
      <div>
      <Container>
        <Row>
          <Col sm={6}>
              <p><strong>THOMSON ENGINEERS & CONTRACTORS</strong> established in the year 2015. Company
              offers a comprehensive range of services in Electrical Instrument, Fire Safety and
              Mechanical - Engineering, Procurement & Construction (EPC) jobs in Marine, Ship
              building, Ship Repair, Petrochemicals, Refinery, Oil & Gas, Commercial and Residential
             Sectors.</p>
              <p>The company is authorized by Department of Industries;
              Energy & Labour of Electrical Contractor License, undertake all type of
              LT/HT electrical installation. The company has technical and Management
              employee staff strength in variety of speciality to take-up projects and
            services.</p>

              <p>Firm is registered with Hindustan Petroleum Corporation Ltd (HPCL),Refinery,Oil Terminals,
             Cochin Shipyard Ltd (CSL-MSRU) and Naval Dockyard Mumbai.</p>
          </Col>
          <Col sm={6}>

              <Carousel interval={3000}>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/insviraat.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/1.jpeg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                   
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/2.jpeg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/3.jpeg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

          </Col>
        </Row>
      </Container>
        
      </div>
      <Footer/>
    </div>
  )
}
