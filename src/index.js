import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const AppRouter = () => (
    <Router>
        <div className='App'>
            <button className='new-game-btn'><Link className='tdnone' to='/game5'>5x5</Link></button>
            <button className='new-game-btn'><Link className='tdnone' to='/game10'>10x10</Link></button>
            <button className='new-game-btn'><Link className='tdnone' to='/game15'>15x15</Link></button>
        <Route path='/game5' component={Game5} />
        <Route path='/game10' component={Game10} />
        <Route path='/game15' component={Game15} />
        </div>
    </Router>
)
const Game5 = ()=> (
    <div>
        <App height={5} size='260'/>
    </div>
)
const Game10 = ()=> (
    <div>
        <App height={10} size='520'/>
    </div>
)
const Game15 = ()=> (
    <div>
        <App height={15} size='780'/>
    </div>
)
ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
