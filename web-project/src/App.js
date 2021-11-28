import React from "react";

// Importando os componentes da tela
import Router from './routes/routes'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'

// funcção app que é chamada no index da aplicação ela é reponsavel
// por iniciar toda aplicação
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