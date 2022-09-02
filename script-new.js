function createCard(gridDiv, img, title, url) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('onclick', `location.href="${url}"`);
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('src', img);
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = title;

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardTitle);
    gridDiv.appendChild(cardDiv);
};

