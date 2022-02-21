async function apiCall(url) {


    try {

        let data = await fetch(url);
        let res = await data.json();

        return res;

    } catch (error) {
        console.log("error:", error)

    }
}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(el => {

        let news = document.createElement('div')
        news.id = "news";

        let img = document.createElement('img');
        img.src = el.urlToImage;

        let title = document.createElement('p')
        title.innerText = el.title;
        title.style.fontWeight = '500'

        let desc = document.createElement('p')
        desc.innerText = el.description;

        let innerDiv = document.createElement('div')
        innerDiv.append(title, desc)
        innerDiv.id = "innerDiv"

        news.append(img, innerDiv);


        main.append(news)

        news.addEventListener('click', () => {
            let articles = el;
            localStorage.setItem('article', JSON.stringify(articles));
            window.location.href = "news.html"
        })

    });


}

function appendArticle(articles, main) {

    //add append logic here

    articles.forEach(el => {

        let news = document.createElement('div')
        news.id = "news";

        let img = document.createElement('img');
        img.src = el.urlToImage;

        let title = document.createElement('p')
        title.innerText = el.title;
        title.style.fontWeight = "bold"

        let desc = document.createElement('p')
        desc.innerText = el.description;

        let content = document.createElement('p')
        content.innerHTML = el.content;

        news.append(title, img, desc, content);


        main.append(news)


    });


}




export { apiCall, appendArticles, appendArticle }