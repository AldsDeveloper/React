
import React from 'react'
import {BrowserRouter, Link, Route, 
        Switch, Redirect} from 'react-router-dom'

import './route.css'

import {Map, Calculator} from './components'

export default function Router7() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> -&nbsp;
                <Link to="/calendar/12/2021">Calendar</Link> -&nbsp;
                <Link to="/map/satellite/17">Map</Link> -&nbsp;
                <Link to="/calculator/20/5/*">Calculator</Link>
            </nav>
            <div className="content">
                <Switch>
                    <Route path="/" exact={true} render={()=><h3>Home</h3>}/>

                    <Route path="/calendar/:month/:year" render={
	                    (props) => {
		                    let m = props.match.params.month || 1
		                    let y = props.match.params.year || 2000
                            return (<div>{m}/{y}</div>)
	                    }
                    }/>
                    <Route path="/map/:type/:zoom" component={Map} />
                    <Route path="/calculator/:n1/:n2/:op" component={Calculator} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}