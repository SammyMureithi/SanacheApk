import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import SalesModal from '../Components/SalesModal';

function Sales({navigation}) {
  const res = (
    <View
      style={{
        width: '100%',
        height: 30,
        backgroundColor: 'green',
        marginBottom: 10,
      }}>
      <Text>Hello</Text>
    </View>
  );
  return (
    <SafeAreaView style={{position: 'relative', height: '100%'}}>
      <TextInput
        label="Search Product"
        style={{width: '90%', alignSelf: 'center'}}
        mode="outlined"
      />

      <SalesModal navigation={navigation} />
      <Card
        style={{
          position: 'absolute',
          alignSelf: 'center',
          alignItems: 'center',
          bottom: 0,
          marginBottom: 10,
          width: '100%',
          borderRadius: 12,
        }}>
        <Card.Content>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>Customer Name:</Text>
            <Text>Customer Name</Text>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>Discount:</Text>
            <Text>Kes: 0</Text>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>Payment:</Text>
            <Text>Customer Name</Text>
          </View>
          <View style={styles.cardItem}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.cardItemTitle}>Sub-total</Text>
              <Text>Kes:0</Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginStart: 10}}>
              <Text style={styles.cardItemTitle}>Total</Text>
              <Text>Kes:0</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 10,
                height: 50,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                }}>
                Abort
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 10,
                marginLeft: 20,
                height: 50,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '800',
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                }}>
                Process
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                alignItems: 'center',
                padding: 10,
                marginLeft: 20,
              }}>
              <Image source={require('../Images/p.png')} />
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    marginLeft: 10,
    alignItems: 'center',
  },
  cardItemTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 12,
    marginRight: 30,
  },
});
export default Sales;
