import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import style from './styles/all.scss' // eslint-disable-line
import Main from './containers/main'

const app = document.getElementById('root')

window.onload = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Main/>
		</Provider> , app)
}