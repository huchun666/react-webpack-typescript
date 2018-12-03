import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from "./containers/app";
import Home from './components/Home/Home';
import NoMatch from './containers/noMatch';
import { Provider } from 'react-redux'
const routers = ({ store }) => (
    <Provider store={store}>
        <div className="router_class">
            <Switch>
                <Route path="/app/:username" component={App}></Route>
                <Route path="/home" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Provider>
)

export default routers