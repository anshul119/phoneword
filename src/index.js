import React from 'react';
import ReactDOM from 'react-dom';
import style from 'styles/all.scss';
import Keyboard from 'components/keyboard';

window.onload = () => {
	ReactDOM.render(<Keyboard/> ,document.getElementById('root'));
};