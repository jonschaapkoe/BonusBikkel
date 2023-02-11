const output = document.getElementById("output");
//fetch API used to fetch posts from persoonlijkebonus subreddit
fetch('https://www.reddit.com/r/persoonlijkebonus.json?limit=50')
  .then(response => response.json())
  .then(data => {
    //create an empty array to store posts
    let posts = [];
    //loop through the data
    for (let i = 0; i < data.data.children.length; i++) { 
    	if (['KORTING LOOPT / KOOPZEGELS AAN', 'VANAF MAANDAG / KOOPZEGELS AAN'].includes(data.data.children[i].data['link_flair_text'])) {
		// Create a div for each element 
		let button = document.createElement("button");
		
		// Give the button a class
		button.className = "result";
		  
		  // Create a text node for the button
		let textNode = document.createTextNode(data.data.children[i].data["title"]);

		// Append the text node to the button
		button.appendChild(textNode);

		// Add the button to the HTML document
		output.appendChild(button);

		// Add event listener to the button
		button.addEventListener("click", function() {
		  // Add the link you want to lead to
		  window.location.href = data.data.children[i].data["url"];
	});
	};
	};
});
document.getElementById("laden").style.display = "none";

function searchBonusBoxes() {
output.innerHTML = '';
document.getElementById("laden").style.display = "block";
input = document.getElementById('searchbar').value;
//fetch API used to fetch posts from persoonlijkebonus subreddit
fetch('https://www.reddit.com/r/persoonlijkebonus/search.json?q='+input+'&restrict_sr=1&sr_nsfw=&t=all&sort=new&limit=50')
  .then(response => response.json())
  .then(data => {
  console.log(data);
    //loop through the data
    for (let i = 0; i < data.data.children.length; i++) { 
    	if (['KORTING LOOPT / KOOPZEGELS AAN', 'VANAF MAANDAG / KOOPZEGELS AAN'].includes(data.data.children[i].data['link_flair_text'])) {
		// Create a div for each element 
		let button = document.createElement("button");
		
		// Give the button a class
		button.className = "result";
		  
		  // Create a text node for the button
		let textNode = document.createTextNode(data.data.children[i].data["title"]);

		// Append the text node to the button
		button.appendChild(textNode);

		// Add the button to the HTML document
		output.appendChild(button);

		// Add event listener to the button
		button.addEventListener("click", function() {
		  // Add the link you want to lead to
		  window.location.href = data.data.children[i].data["url"];
	});
	};
	};
});
document.getElementById("laden").style.display = "none";
}

