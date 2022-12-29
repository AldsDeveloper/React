
import React from 'react'
import {BrowserRouter, Link, Route, 
        Switch, Redirect} from 'react-router-dom'

import './route.css'

export default function Router6() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> -&nbsp;
                <Link to="/js">JavaScript</Link> -&nbsp;
                <Link to="/js/react">React</Link> -&nbsp;
                <Link to="/js/react/native">React Native</Link>
            </nav>
            <div className="content">
                <Switch>
                    <Route path="/" exact={true} render={() => <h4>Home Page</h4>}/>
                    <Route path="/js" exact={true} render={() => <h4>JavaScript Page</h4>}/>
                    <Route path="/js/react" exact={true} render={() => <h4>React Page</h4>}/>
                    <Route path="/js/react/native" exact={true} render={() => <h4>React Native Page</h4>}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}