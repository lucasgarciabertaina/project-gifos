// Imports
import { page } from './modules/page.js'
import getTrendingApi from './modules/trending/get.js';
import setHtml from './modules/trending/setHtml.js';
import './modules/darkMode.js'
const APIKEY = "DENft9K6PwvYPg4VZEJmkeY2iciLh2yb";
const htmlPage = document.getElementsByTagName('body');
console.log(htmlPage)
page(htmlPage[0])