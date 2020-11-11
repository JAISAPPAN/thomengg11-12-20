import {Container,Row,Col,Jumbotron,Button} from 'react-bootstrap'
import Link from 'next/link'
import Table1rmat from '../components/Table1rmat'
import Table2rubbermat from './Table2rubbermat'
import Header from './Header';
import Footer from './Footer'
//import SideBar from '../components/SideBarTest';
import { JumboProduct } from '../components/Jumbo'
import Rubbermat_component,{Rubbermat_compo} from '../components/Rubbermat_compo'

export default function Rubbermat() {
    return (
        <div>
            
         <Header/>
        <JumboProduct/>
        <Rubbermat_compo/>
        <Rubbermat_component />  
         <Table1rmat />         
         <Table2rubbermat/>
                    
            <Footer /> 
        </div>
    )}    
        
                   
                   
            
           
                    
                
                
            
          
            
            
                
              
            
