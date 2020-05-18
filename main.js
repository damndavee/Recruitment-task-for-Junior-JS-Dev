import './styles.css';

import app from './src/app.js'

(function (window) {
    app(window, document.querySelector('#root'))
})(window)
