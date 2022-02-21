import { appendArticles } from "./main.js";

function storeSearchterm(term) {

    let search_term = localStorage.getItem("search_term");
    let res = await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${search_term}`);
    console.log("res:", res);
    let parent = document.getElementById("main");

    appendArticles(res.results, parent);

}

export default storeSearchterm