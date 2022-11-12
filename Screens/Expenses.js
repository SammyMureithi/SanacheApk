import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

function Expenses() {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View style={{top: 50}}>
        <TextInput
          mode="outlined"
          label="Amount"
          keyboardType="number-pad"
          style={{width: 250, bottom: 10}}
          value={amount}
          onChangeText={amount => setAmount(amount)}
        />
        <TextInput
          mode="outlined"
          label="Description"
          style={{width: 250}}
          value={description}
          onChangeText={description => setDescription(description)}
        />
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'green',
            alignItems: 'center',
            top: 20,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'white',
            }}>
            Add Expenses
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Expenses;
