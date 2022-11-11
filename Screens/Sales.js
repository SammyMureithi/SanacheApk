import React from 'react';
import {Text, View} from 'react-native';
import SalesModal from '../Components/SalesModal';

function Sales({navigation}) {
  return (
    <View>
      <Text>Sales</Text>
      <SalesModal navigation={navigation} />
    </View>
  );
}

export default Sales;
