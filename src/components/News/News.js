import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: []
		};
	}

	componentDidMount() {
		const url =
			"https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=b24a46973f1a441c8926e85311686acd";

		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					news: data.articles
				});
			})
			.catch(error => console.log(error));
	}

	renderItems() {
		return this.state.news.map(item => <NewSingle key={item.url} item={item} />);
	}

	render() {
		return (
		<div className="container">
		<div className="row mb-4">

				{this.renderItems()}

		</div>
		</div>
		);
	}
}

export default News;
