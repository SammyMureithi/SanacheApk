import React from 'react';
import {useState} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import {color} from 'react-native-reanimated';

function SalesModal({navigation}) {
  const [open, setOpen] = useState(true);
  function handleClose() {
    setOpen(open => !open);
    navigation.navigate('Home');
  }
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.textView}>Retailer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.textView}>Wholesale</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.textView}>Vendor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.textView}>Return Sales</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.textView}>Reprint receipt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.calcel} onPress={handleClose}>
                <Text style={styles.textCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '90%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  view: {
    width: '100%',
    borderRadius: 5,
    borderColor: 'green',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
  },
  textView: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '700',
    color: 'green',
    textTransform: 'uppercase',
  },
  calcel: {
    width: '60%',
    borderRadius: 5,
    borderColor: 'green',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
  },
  textCancel: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '700',
    color: 'red',
    textTransform: 'uppercase',
  },
});
export default SalesModal;
