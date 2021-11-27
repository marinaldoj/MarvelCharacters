import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Characters from '../pages/Characters'
import ProfileCharacter from '../pages/ProfileCharacter'

function Router(){
    return(
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/characters" exact element={<Characters />} />
            <Route path="/character/:id" exact element={<ProfileCharacter />} />
        </Routes>
    )
}

export default Router