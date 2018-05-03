import React from 'react';
import { Animated, ScrollView, View, Text, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import TabBarIcon from 'react-navigation';

//import TabBarIcon from './node_modules/react-navigation/src/views/TabView/TabBarIcon';

export default class MyTabBar extends React.Component {
  static defaultProps = {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    showIcon: false,
    showLabel: true,
    upperCaseLabel: true,
    allowFontScaling: true,
  };

  _renderLabel = scene => {
    const {
      position,
      tabBarPosition,
      navigation,
      activeTintColor,
      inactiveTintColor,
      showLabel,
      upperCaseLabel,
      labelStyle,
      allowFontScaling,
    } = this.props;
    if (showLabel === false) {
      return null;
    }
    const { index } = scene;
    const { routes } = navigation.state;
    // Prepend '-1', so there are always at least 2 items in inputRange
    const inputRange = [-1, ...routes.map((x, i) => i)];
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? activeTintColor : inactiveTintColor)
    );
    const color = position.interpolate({
      inputRange,
      outputRange: outputRange,
    });

    const tintColor = scene.focused ? activeTintColor : inactiveTintColor;
    const label = this.props.getLabel({ ...scene, tintColor });
    if (typeof label === 'string') {
      return (
        <Animated.Text
          style={[styles.label, { color }, labelStyle]}
          allowFontScaling={allowFontScaling}
        >
          {upperCaseLabel ? label.toUpperCase() : label}
        </Animated.Text>
      );
    }
    if (typeof label === 'function') {
      return label({ ...scene, tintColor });
    }

    return label;
  };

  _renderIcon = scene => {
    const {
      position,
      navigation,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      showIcon,
      iconStyle,
    } = this.props;
    if (showIcon === false) {
      return null;
    }
    return (
      <TabBarIcon
        position={position}
        navigation={navigation}
        activeTintColor={activeTintColor}
        inactiveTintColor={inactiveTintColor}
        renderIcon={renderIcon}
        scene={scene}
        style={[styles.icon, iconStyle]}
      />
    );
  };

  _handleOnPress = scene => {
    const { getOnPress, jumpToIndex, navigation } = this.props;
    const previousScene = navigation.state.routes[navigation.state.index];
    const onPress = getOnPress(previousScene, scene);

    if (onPress) {
      // To maintain the same API as `TabbarBottom`, we pass in a `defaultHandler`
      // even though I don't believe in this case it should be any different
      // than `jumpToIndex`.
      onPress({
        previousScene,
        scene,
        jumpToIndex,
        defaultHandler: jumpToIndex
      });
    } else {
      jumpToIndex(scene.index);
    }
  };

  render() {
    // TODO: Define full proptypes
    const props = this.props;

    let propsText = null;
    //props.layout.width *= (3 / 4);
    //props.layout.measured = false;
    propsText = <Text style={{fontSize: 16}}>Props: {JSON.stringify(props)}</Text>;

    
    return (
      <View style={{flex:10}}>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'pink'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor: '#272727', height: '100%'}}>
                <Text style={{fontSize: 32, color: '#FFFFFF'}}>JULY</Text>
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
                <TabBar
                    {...props}
                    onTabPress={this._handleOnPress}
                    jumpToIndex={() => {}}
                    renderIcon={this._renderIcon}
                    renderLabel={this._renderLabel}
                />
            </View>
        </View>
        <View style={{flex:1}}>
        <ScrollView>
        {propsText}
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 8,
    backgroundColor: 'transparent',
  },
});
