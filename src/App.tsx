import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Profile } from './components/Profile';
import { UsersList } from './components/UsersList';

function App() {
    if (!localStorage.getItem('page_id')) {
        localStorage.setItem('page_id', String(1))
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => (<Redirect to='/page/1' />)} />
                <Route exact path="/page/:id">
                    <UsersList />
                </Route>
                <Route path="/profile/:login">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
