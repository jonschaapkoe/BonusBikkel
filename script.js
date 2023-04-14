function checkTime(unixTimeStamp){
	const currentDay = Date.currentDay();
	const startOfWeek = Date();
	startOfWeek.setDate(Date.getDate() - currentDay + 1);
	startOfWeek.setHours(0, 0, 0, 0);

	return unixTimeStamp >= startOfWeek;
};


const output = document.getElementById("output");
//fetch API used to fetch posts from persoonlijkebonus subreddit
fetch('https://www.reddit.com/r/persoonlijkebonus.json?limit=50')
  .then(response => response.json())
  .then(data => {
    let posts = [];
    for (let i = 0; i < data.data.children.length; i++) { 
    	if (['KORTING LOOPT / KOOPZEGELS AAN', 'KORTING LOOPT / KOOPZEGELS UIT'].includes(data.data.children[i].data['link_flair_text'])
		&& checkTime(data.data.children[i].data['created'])) {
			
			let button = document.createElement("button");
			button.className = "result";
			let textNode = document.createTextNode(data.data.children[i].data["title"]);
			button.appendChild(textNode);
			output.appendChild(button);
			button.addEventListener("click", function() {
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
    	if (['KORTING LOOPT / KOOPZEGELS AAN', 'KORTING LOOPT / KOOPZEGELS UIT'].includes(data.data.children[i].data['link_flair_text'])
		&& checkTime(data.data.children[i].data['created'])) {
			let button = document.createElement("button");
			button.className = "result";
			let textNode = document.createTextNode(data.data.children[i].data["title"]);
			button.appendChild(textNode);
			output.appendChild(button);
			button.addEventListener("click", function() {
				window.location.href = data.data.children[i].data["url"];
				});
			};
		};
	});
};
document.getElementById("laden").style.display = "none";
