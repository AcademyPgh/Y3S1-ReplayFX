import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../utils/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale, moderateScale } from '../utils/Scaling';

// TODO: Promo images will need to come from convention
export default class ConventionPicker extends React.Component {
    constructor(props){
        super(props);

    }

    handleConventionSelected = (convention) => {
        this.props.onConventionSelected(convention);
    }

    renderConvention = (convention) => {
        return (
            <TouchableOpacity key={convention.id} onPress={() => {                  
                this.handleConventionSelected(convention)}}>

                <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
                <View style={styles.text}>
                    <Text style={styles.Font}>{convention.name}</Text>
                </View>
                <View style={styles.imgcontainer}>
                    <Icon name={'chevron-right'} size={scale(30)} color='#969696' />
                </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ScrollView style={styles.background}> 
                <View style={styles.headerImageContainer}>
                    <ScalableImage style={styles.headerImage} width={Dimensions.get('window').width}
                        source={require('../../Images/SelectConventionHeader.png')} />
                </View>
                {
                    this.props.conventionList.map(convention => {
                        return this.renderConvention(convention);
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Font: {
      fontSize: scale(28),
      fontFamily: Fonts.NunitoLight,
    },
    container: {
      flex: 1,
      paddingVertical: verticalScale(10),
      flexDirection: 'row',
    },
    imgcontainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: scale(20),
    },
    text:{
      justifyContent: 'center',
      paddingLeft: scale(20),
      flex: 1
    },
    background:{
      backgroundColor: '#f3f3f3',
    },
    headerImage: {
      marginTop: -2,
    },
    headerImageContainer: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      paddingBottom: 10,
    },
  });
