import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

function Deposit() {
  const [depositMethod, setDepositMethod] = useState();
  const [amount, setAmount] = useState();
  const [transactionCode, setTransactionCode] = useState();
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
          label="Deposit Method"
          keyboardType="number-pad"
          style={{width: 250, bottom: 10}}
          value={depositMethod}
          onChangeText={depositMethod => setDepositMethod(depositMethod)}
        />
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
          label="Transaction Code"
          style={{width: 250, bottom: 10}}
          value={transactionCode}
          onChangeText={transactionCode => setTransactionCode(transactionCode)}
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
            POST DEPOSIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Deposit;
