import React from "react";
import PropTypes from "prop-types";
import { MessageShape } from "../utils/MessageUtils";
const keyExtractor = (item) => item.id.toString();

export default class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };
  static defaultProps = {
    onPressMessage: () => {},
  };
  renderMessageBody = ({ type, text, uri, coordinate }) => {
    switch (type) {
      case "text":
        return (
          <View style={styles.messageBubble}>
            <Text style={styles.text}> {text} </Text>
          </View>
        );
      case "image":
        return <Image style={styles.image} source={{ uri }} />;
      case "location":
        return <MapView style={styles.map} initialRegion={{}}></MapView>;
    }
  };
}
