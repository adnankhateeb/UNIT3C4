function storeSearchterm(term) {



}

export default storeSearchterm




import { apiCall, appendArticles } from "../scripts/main.js"

let searchterm = localStorage.getItem('search_term');

let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${searchterm}`
let parent = document.getElementById('main');

let res = await apiCall(url);

appendArticles(res, parent)