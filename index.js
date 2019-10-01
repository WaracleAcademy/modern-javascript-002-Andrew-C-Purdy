	console.log(title);

    appDiv.innerHTML = 
      `<article>
      <h1>${title}</h1>
        <h2>${film_1}</h2>
        <h3>${featuring_1}.</h3>
        <h2>${film_2}</h2>
        <h3>${featuring_2}.</h3>
      </article>`

    const article = document.createElement('article');
    const header2 = document.createElement('h2');

    header2.innerText = title;
    article.appendChild(header2);