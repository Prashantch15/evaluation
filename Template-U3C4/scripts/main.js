async function apiCall(url) {
    try {
        let res = await fetch(url);

        let data = await res.json();

        return data;
    } catch (error) {
        console.log("error:", error);
    }

    //add api call logic here


}


function appendArticles(data, parent) {

    data.forEach(element => {
        let div = document.createElement("div")

        let image = document.createElement("img");

        image.src = element.urlToImage;

        let p = document.createElement("p");

        p.innerText = element.name;

        let p1 = document.createElement("p");
        p.innerText = element.title;

        div.append(image, p);

        parent.append(div);
    });


    //add append logic here

}

export { apiCall, appendArticles }