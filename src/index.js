// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
// import Badge from './Components/Badge';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// const jsx = <h1>Hello, platzi badges!</h1>
// const element = React.createElement(
//     'a',
//     {href: 'https://platzi.com'},
//     'Ir a Platzi'
// );
// const name = 'Ivan';
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1> Hola soy {undefined} </h1>;


// ReactDOM.render(__que__, __donde__);
// ReactDOM.render(
//     <Badge firstName="Ivan"
//         lastName="Loeza"
//         jobTitle="Frontend engineer"
//         twitter="un_alquimista"
//         avatar="https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/p960x960/36430173_10155552199268483_1533129932547293184_o.jpg?_nc_cat=105&_nc_ohc=d_b0rMNgIMMAQnW_-nzScJAplsP4QHgE1wgvDyyWJAFmGcCcwDAJgYAeg&_nc_ht=scontent.fmid3-1.fna&oh=afa17dcf090c9988856da7beda8503c1&oe=5EA8FF7C" 
//     />,
//     container);

const container = document.getElementById('app');
ReactDOM.render(<App />, container);