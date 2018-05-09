import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './appRouter/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import HomePage from './components/HomePage';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
