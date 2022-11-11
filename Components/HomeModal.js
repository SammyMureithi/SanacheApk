import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Portal, Modal} from 'react-native-paper';

function HomeModal({visible, handleDismiss, navigation}) {
  function handleNavigate(route) {
    handleDismiss();
    navigation.navigate(route);
  }
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={handleDismiss}
        style={{
          display: 'flex',
          flexDirection: 'row',
          top: '50%',
          width: '100%',
          backgroundColor: 'white',
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={handleDismiss}>
            <Image source={require('../Images/Cl.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalItem}
            onPress={() => handleNavigate('Sales')}>
            <Image source={require('../Images/C.png')} />
            <Text style={styles.text}>Sales</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalItem}
            onPress={() => handleNavigate('Transfers')}>
            <Image source={require('../Images/T.png')} />
            <Text style={styles.text}>Transfers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalItem}
            onPress={() => handleNavigate('Expenses')}>
            <Image source={require('../Images/E.png')} />
            <Text style={styles.text}>Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalItem}
            onPress={() => handleNavigate('Deposit')}>
            <Image source={require('../Images/B.png')} />
            <Text style={styles.text}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
}
const styles = StyleSheet.create({
  modalItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    marginLeft: 30,
    marginRight: 90,
  },
});
export default HomeModal;
