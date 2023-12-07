import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';

const {widthPixel, fontPixel} = ratio;

const GreenBtn = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GreenBtn;

const styles = StyleSheet.create({
  btnText: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratSemiBold,
  },
  btn: {
    width: widthPixel(306),
    height: widthPixel(48),
    backgroundColor: COLOR.green,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(26),
  },
});
