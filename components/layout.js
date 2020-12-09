

import Header from '../pages/Header'
import Footer from "../pages/Footer"

export default function Layout ({children}) {
  return (
    <div>
     
     <Header/>
      <main>
        
        {children}
      </main>
     <Footer/>
    </div>
  )
}