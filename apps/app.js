// Imports
import { page } from './modules/page.js'
import './modules/darkMode.js'

const htmlPage = document.getElementsByTagName('body');
console.log(htmlPage)
page(htmlPage[0])
