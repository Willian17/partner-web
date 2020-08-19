import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing';
import ProjectForm from './pages/ProjectForm';
import ProjectList from './pages/ProjectList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact  component={Landing}/>
            <Route path="/announce" exact  component={ProjectForm}/>
            <Route path="/list" exact  component={ProjectList}/>
        </BrowserRouter>
    )
}