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
        // Below we are using the 'moment' library to convert the date
        // to the time passed since the artictle was published()
        const time = moment(publishedAt || moment.now()).fromNow();
        const defaulting = 'default.png'; // image thet shows up if nothing there

        return (
            <TouchableNativeFeedback // Function in react native that mods the DOC?????????
            useForeground
            onPress={() => Linking.openURL(url)}
            >
                <Card
                    featuredTitle={title}
                    featuredTitleStyle={featuredTitleStyle}
                    image={{
                        uri: irlToImage || defaulting
                    }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        {description || 'Read More...'}
                    </Text>
                    <Divider style={{ backgroundColor = '#dfe6ef' }} />
                    <View
                        style={}
                    ></View>
                </Card>
            </TouchableNativeFeedback>
        );
    }
}

const styles