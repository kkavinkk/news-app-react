import React from 'react';
import { FlatList }  from 'react-native'

import { getNews } from './src/news.js';

export default class App extends React.Component { //App is the default export of the file
    constructor(props){ //the constructor is called when an instance of the component is created(the compnent here is "articles")
        super(props); // calls the constructo of the parent class(React.Component) and makes sure it is initalized
        this.state = { articles: [], refreshing: true };// "articles: []" is an empty array meant to hold the articles, refreshing is true sp the app laods
        this.fetchNews = this.fetchNews.bind(this) // in JS we MUST manually bind thse together
    }

    componentDidMount() { // a lifecycle method that runs after the component is added to the dom(good way to fetch data from api)
        this.fetchNews(); // gets the news articles
    }

    fetchNews() {
        getNews() // this function is in news.js and fetchs the news from the API
        .then(articles => this.setState({ articles, refreshing: false })) // once displayed the article is updates with fetched data and loading is complete
        .catch(() => this.setState({ refreshing: false })) // is there is an error in the data fetching it only updates the refreshing
        //ensures app is not stuck in a loading state, CATCH IS CALLED IN REJECTING CASES
    }

    handleRefresh() { // If an error accurs in the fetchNews() function then this will activate causing new articles to laod
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        ); // the entire function starts a spinner animation and calls fetchNews() so its called IMMEDIATLLY
    }
}

