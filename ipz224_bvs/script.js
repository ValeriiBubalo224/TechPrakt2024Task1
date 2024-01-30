document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // Викликати API для отримання новин з https://tsn.ua
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftsn.ua%2Frss')
        .then(response => response.json())
        .then(newsData => {
            // Додати новини на сторінку
            newsData.items.forEach(newsItem => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h2>${newsItem.title}</h2>
                    <img src="${newsItem.enclosure.link}" alt="${newsItem.title}">
                    <p>${newsItem.description}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Помилка отримання новин:', error));
});
