import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
            <TouchableOpacity key={convention.Id} onPress={() => {                  
                this.handleConventionSelected(convention)}}>

                <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
                <View style={styles.text}>
                    <Text style={styles.Font}>{convention.Name}</Text>
                </View>
                <View style={styles.imgcontainer}>
                    <Icon name={'chevron-right'} size={scale(30)} color='#969696' />
                </View>
                </View>
            </TouchableOpacity>
        );
    }

    render()
    {
        return (
            <ScrollView style={styles.background}> 
                <Text style={styles.Font}>Select Convention:</Text>
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
      paddingBottom: verticalScale(5),
      color: '#969696',
      fontSize: scale(28),
      fontFamily: Fonts.NunitoLight,
    },
    container: {
      flex: 1,
      paddingVertical: verticalScale(10),
      borderWidth: .5,
      borderColor: '#9ca4ab',
      flexDirection: 'row',
    },
    imgcontainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: scale(20),
    },
    text:{
      justifyContent: 'center',
      paddingLeft: scale(20),
      flex: 1
    },
    background:{
      borderWidth: .5,
      backgroundColor: '#f3f3f3',
      borderColor: '#9ca4ab',
    },
  });
