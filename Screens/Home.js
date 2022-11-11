import React from 'react';
import {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import FloatingActionButton from '../Components/FloatingActionButton';
import GasSummery from '../Components/GasSummery';
import HomeModal from '../Components/HomeModal';
import OtherSummery from '../Components/OtherSummery';

function Home({navigation}) {
  const [openModal, setOpenModal] = useState(false);
  function handleDismiss() {
    setOpenModal(prevOpen => !prevOpen);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GasSummery
        volume={'6kg'}
        percentG="68%"
        percentE={'32%'}
        Gas="170"
        Empties="80"
      />
      <GasSummery
        volume={'13kg'}
        percentG="44%"
        percentE={'56%'}
        Gas="110"
        Empties="140"
      />
      <OtherSummery title={'Others'} content="3kg,22.5kg,45kg,50kg" />
      <OtherSummery title={'Accessories'} content="0" />
      <OtherSummery title={"Today's Sales"} content="Kes.0" />
      <OtherSummery title={"Today's Expenses"} content="Kes.0" />
      <HomeModal
        visible={openModal}
        handleDismiss={handleDismiss}
        navigation={navigation}
      />
      <FloatingActionButton
        handleDismiss={handleDismiss}
        openModal={openModal}
      />
    </View>
  );
}

export default Home;
