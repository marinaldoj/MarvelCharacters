import React from "react";

import Router from './routes/routes'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'

function App(){
    return(
        <>
            <MainHeader/>
            <Router />
            <Footer />
        </>
    )
}

export default App