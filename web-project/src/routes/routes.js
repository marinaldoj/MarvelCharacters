import React from "react";
import { Route, Routes } from 'react-router-dom'

// Aqui ficam os componentes que serão exibidos na aplicação
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import ProfileCharacter from '../pages/ProfileCharacter'

// Aqui fica o componente de Rotas da aplicação
// nele será inserido todas rotas da aplicação e quais componentes exibir
function Router(){
    return(
        <Routes>
            <Route path="/:lang" exact element={<Home />} />
            <Route path="/characters" exact element={<Characters />} />
            <Route path="/character/:id" exact element={<ProfileCharacter />} />
        </Routes>
    )
}

export default Router