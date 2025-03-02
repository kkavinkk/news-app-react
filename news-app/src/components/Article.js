import React from "react";
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider, makeStyles } from 'react-native-elements'
import moment from "moment";
import { color } from "react-native-elements/dist/helpers";

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
            <TouchableNativeFeedback
                useForeground
                onPress={() => Linking.openURL(url)}
            >
                <Card
                featuredTitle={title}
                featuredTitleStyle={featuredTitleStyle}
                image={{
                    uri: urlToImage || defaultImg
                }}
                >
                <Text style={{ marginBottom: 10 }}>
                    {description || 'Read More..'}
                </Text>
                <Divider style={{ backgroundColor: '#dfe6e9' }} />
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                    <Text style={noteStyle}>{time}</Text>
                </View>
                </Card>
            </TouchableNativeFeedback>
        );
    }
}

const styles = {
    noteStyle: {
        margin: 5,
        fonstStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10,
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
};