import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { styles } from './Games.styles';

export default class AlphaBar extends Component{
    constructor(props) {
      super(props);
  
      alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.buttons = alphabet.split('');
      this.buttons.unshift('0-9');
  
      this.buttonLayout = {};
    }
  
    alphaScroll: ?ScrollView;
  
    setScroll = (el) => {
      this.alphaScroll = el;
    }
  
    layoutScroll = (e) => {
      this.scrollWidth = e.nativeEvent.layout.width;
    }
  
    handleContentSizeChange = (contentHeight, contentWidth) => {
      this.scrollContentWidth = contentWidth;
    };
  
    layoutButton = (e, key) => {
      if (!this.buttonLayout[key]) {
        this.buttonLayout[key] = {width: e.nativeEvent.layout.width, x: e.nativeEvent.layout.x};
      }
    }
  
    scrollToButton = (key, animate = true) => {
      const scrollHalfWidth = this.scrollWidth * 0.5;
      const button = this.buttonLayout[key];
      const buttonCenter = button.x + (button.width * 0.5);
  
      let scrollPos = buttonCenter - scrollHalfWidth;
  
      scrollPos = scrollPos < 0 ? 0 : scrollPos;
  
      this.alphaScroll.scrollTo({x: scrollPos, animated: animate});
    }
  
    handlePress = (key) => {
      this.scrollToButton(key, true);
      this.props.onPress(key);
    }
  
    render() {
      return (
        <ScrollView style={{backgroundColor: '#555555'}} contentContainerStyle={{backgroundColor: '#555555'}} showsHorizontalScrollIndicator={false} horizontal={true} ref={this.setScroll} onLayout={this.layoutScroll} onContentSizeChange={this.handleContentSizeChange}>
          <View style={{flexDirection: 'row'}}>
            {this.buttons.map(text => {
              let style = [styles.letter];
              if (text.length > 1) {
                style.push(styles.wideLetter);
              }
              return (
                <TouchableHighlight style={style}
                  key={text}
                  onLayout={(e) => {this.layoutButton(e, text)}}
                  onPress={() => this.handlePress(text)}>
                    <Text style={styles.scrollLetterText}>{text}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
      );
    }
  }