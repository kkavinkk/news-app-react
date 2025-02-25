import React from "react";
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider, makeStyles } from 'react-native-elements'
import moment from "moment";

export default class Article extends React.Component {
    render() {
        const {
            title,
            description,
            publishedAt,
            source,
            urlToImage,
            url
        } = this.props.article;
        const { noteStyle, featuredTitleStyle } = styles;
        const time = moment(publishedAt || moment.now()).fromNow();
        const defaulting = 'default.png';

        return (
            <TouchableNativeFeedback
            useForeground
            onPress={() => Linking.openURL(url)}
        )
    }
}
