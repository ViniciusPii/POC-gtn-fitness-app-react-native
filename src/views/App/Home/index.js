import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { orderBy } from 'lodash';

import { Text } from 'react-native';
import { months } from '../../../mocks/months';

import firebase from '../../../services/firebase';

import {
  ListMonths,
  Container,
  Layout,
  ButtonCircle,
  List,
  WeightInfo,
} from '../../../components';

const Home = () => {
  const today = new Date();

  const navigation = useNavigation();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [list, setList] = useState([]);
  const [listFatPercentage, setListFatPercentage] = useState([]);
  const [listWeight, setListWeight] = useState([]);

  const { uid } = firebase.auth().currentUser;

  useEffect(() => {
    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[selectedMonth])
      .on('value', (snap) => {
        setList([]);
        setListFatPercentage([]);
        setListWeight([]);
        snap.forEach((item) => {
          const newList = {
            key: item.key,
            weight: item.val().weight,
            fatWeight: item.val().fatWeight,
            fatPercentage: item.val().fatPercentage,
          };

          setList((oldArray) => orderBy([...oldArray, newList], 'key', 'desc'));
          setListFatPercentage((oldArray) => [
            ...oldArray,
            newList.fatPercentage,
          ]);
          setListWeight((oldArray) => [...oldArray, newList.weight]);
        });
      });
  }, [selectedMonth]);

  return (
    <>
      <ListMonths
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <Layout>
        <Container w="95%">
          {list.length > 0 ? (
            <WeightInfo fatPercentage={listFatPercentage} weight={listWeight} />
          ) : (
            <Text style={{ marginTop: 120, fontSize: 18 }}>
              {`Nenhum Registro em ${months[selectedMonth]}`}
            </Text>
          )}
          <List
            data={list}
            keyExtractor={list.key}
            selectedMonth={selectedMonth}
          />
          <ButtonCircle
            onPress={() =>
              navigation.navigate('NewWeight', { month: selectedMonth })
            }
          />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
