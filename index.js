// ================================
// Ledger - Add New Articles Here
// ================================
var articles = [
	{ header: "The Rules of Fight Club", path: "fight-club-rules.md", date: new Date("19 Feb 2021") },
	{ header: "The Rules of Fight Club", path: "fight-club-rules.md", date: new Date("19 Feb 2020") },
	{ header: "The Rules of Fight Club", path: "fight-club-rules.md", date: new Date("19 Feb 2022") }
]

// ================================
// Inject Articles
// ================================
function inject_articles() {
	articles.sort(function(a, b) {
		return b.date - a.date;
	});
	for (article_data of articles) {
		// Identify article list elem
		var articles_list = document.getElementById("article_list");
		// Create new article entry element
		var article_entry = document.createElement("li");
		var article_link_wrapper = document.createElement("a");
		var article_header = document.createElement("h3");
		article_header.innerHTML = article_data.header;
		article_link_wrapper.appendChild(article_header);
		var article_date = document.createElement("small");
		article_date.innerHTML = article_data.date.toDateString();
		article_link_wrapper.appendChild(article_date);
		article_link_wrapper.setAttribute("href", `article.html?file_path=${article_data.path}`);
		article_entry.appendChild(article_link_wrapper);
		articles_list.appendChild(article_entry);
	}
}