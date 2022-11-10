import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

function FloatingActionButton() {
  return (
    <View
      style={{
        position: 'absolute',
        margin: 16,
        alignItems: 'center',
        bottom: 0,
        backgroundColor: 'green',
        borderRadius: 20,
      }}>
      <TouchableOpacity>
        <Image
          source={require('../Images/fab.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default FloatingActionButton;
