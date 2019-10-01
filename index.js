	import { render } from './renderer';
	
	const appDiv = document.getElementById('app');

	var title = 'Overview of the Star Wars franchise.';
	var film_1 = 'Star Wars: Episode IV – A New Hope';
	var featuring_1 = 'Featuring Yoda & Luke Skywalker';
	var film_2 = 'Star Wars: Episode V – The Empire Strikes Back';
	var featuring_2 = 'Featuring Darth Vador';
	
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
    
    const anObject = {
    	property: 'string',
    	second: 'also a string',
    	third: true,
    	};
    	
    const { first: property, second } = anObject;
    
    console.log(property); // 'a string'
    console.log(second); // 'also a string'
    console.log(first); // 'a string'
    
    