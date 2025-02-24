import React from 'react';
import { FlatList }  from 'react-native'

import { getNews } from './src/news.js';

export default class App extends React.Component { //App is the default export of the file
    constructor(props){ //the constructor is called when an instance of the component is created(the compnent here is "articles")
        super(props); // calls the constructo of the parent class(React.Component) and makes sure it is initalized
        this.state = { articles: [], refreshing: true };// "articles: []" is an empty array meant to hold the articles, refreshing is true sp the app laods
        this.fetchNews = this.fetchNews.bind(this) // in JS we MUST manually bind thse together
    }
}

