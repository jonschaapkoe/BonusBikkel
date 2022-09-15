function searchBonusBoxes() {
	let search = document.getElementById('searchbar').value
	if (search == "") {
		document.getElementById("output").innerHTML = "";
	} else {
		var poststring = "";
		console.log($.getJSON('https://www.reddit.com/r/persoonlijkebonus/.json'))
		$.getJSON('https://www.reddit.com/r/persoonlijkebonus/.json', function(data) {
			var posts = data["data"]["children"];
			for (var i = 0; i < posts.length; i++) {
				var posttitle = (posts[i]["data"]["title"]);
				if (posttitle.toLowerCase().includes(search.toLowerCase())) {
					poststring = `${poststring}<a href="https://www.reddit.com/r/persoonlijkebonus/comments/${posts[i]["data"]["id"]}">${posts[i]["data"]["title"]}</a><p></p>`;
					document.getElementById("output").innerHTML = poststring;
				};
			};
			if (poststring == "") {
				document.getElementById("output").innerHTML = "Geen BonusBoxen gevonden";
			};
  		});
	}
};
