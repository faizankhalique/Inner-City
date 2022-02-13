import * as React from "react";
import { Animated, TouchableOpacity, Easing } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { theme } from "../services/common/theme";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      springValue: new Animated.Value(1),
    };
  }

  spring = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.isChecked);
    }
    const { springValue } = this.state;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { editable = true } = this.props || {};
    const { springValue } = this.state;

    return (
      <TouchableOpacity
        style={{
          marginVertical: 5,
          flexDirection: "row",
        }}
        disabled={!editable}
        onPress={this.spring.bind(this, Easing.bounce)}
      >
        <Animated.View
          style={{
            width: 20,
            height: 22,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
            backgroundColor: this.props.isChecked
              ? theme.COLORS.EQUATOR
              : theme.COLORS.WHITE,
            transform: [{ scale: springValue }],
          }}
        >
          {this.props.isChecked ? (
            <FeatherIcon name="check" color={theme.COLORS.WHITE} size={12} />
          ) : null}
        </Animated.View>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default CheckBox;
