import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

function TrnasferHeader() {
  return (
    <View>
      <TouchableOpacity style={{right: 10}}>
        <Image source={require('../Images/m.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default TrnasferHeader;
