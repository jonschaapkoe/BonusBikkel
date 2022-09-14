function createCard(/*gridDiv, */cardData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('onclick', `location.href="${cardData.url}"`);
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('src', cardData.img);
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = cardData.title;

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardTitle);
    /*gridDiv.appendChild(cardDiv);*/
};

/*const cardData = {
    title: 'title',
    url: 'url',
    img: 'imgStr'
}*/

$.getJSON('https://www.reddit.com/r/persoonlijkebonus/.json', function(data) {
    const posts = data['data']['children'];
    const gridDiv = document.getElementById('gridDiv');
    cards = [];
    for (let i = 0; i < posts.lenght; i++) {
        let cardData = {
            title: posts[i]['data']['title'],
            url: posts[i]['data']['data'],
            img: posts[i]['data']['media_metadata'][1] /* [p]/[s]/[u]->([0])->[u] */
        };
        cards.apppend(createCard(/*gridDiv, */cardData));
    };
    console.log(cards);
})