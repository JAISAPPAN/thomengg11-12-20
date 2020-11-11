import SideBar from '../components/SideBarTest'

import Rubbermat from './RubbermatTest'
import Header from './Header'
import {JumboIndex} from '../components/Jumbo'
import Footer from './Footer'

export default function TestPage() {
    return (
        <div>
            <Header/>
            <JumboIndex/>

            <SideBar/>
            <Rubbermat/>
            <Footer/>
        </div>
    )
}

