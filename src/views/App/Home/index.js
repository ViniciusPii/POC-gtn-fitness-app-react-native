import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { orderBy } from 'lodash';

import { months } from '../../../mocks/months';

import firebase from '../../../services/firebase';

import {
  ListMounths,
  Container,
  Layout,
  ButtonCircle,
  List,
} from '../../../components';

const Home = () => {
  const today = new Date();

  const navigation = useNavigation();

  const [selectedMounth, setSelectedMounth] = useState(today.getMonth());
  const [list, setList] = useState([]);
  const [listWeight, setListWeight] = useState([]);
  const { uid } = firebase.auth().currentUser;

  useEffect(() => {
    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[selectedMounth])
      .on('value', (snap) => {
        setList([]);
        setListWeight([]);
        snap.forEach((item) => {
          const newList = {
            key: item.key,
            weight: item.val().weight,
            fatWeight: item.val().fatWeight,
            fatPercentage: item.val().fatPercentage,
          };
          setList((oldArray) => orderBy([...oldArray, newList], 'key', 'desc'));
          setListWeight((oldArray) => [...oldArray, newList.weight]);
        });
      });
  }, [selectedMounth]);

  return (
    <>
      <ListMounths
        selectedMounth={selectedMounth}
        setSelectedMounth={setSelectedMounth}
      />
      <Layout>
        <Container w="95%">
          <List data={list} keyExtractor={list.key} weight={listWeight} />
          <ButtonCircle onPress={() => navigation.navigate('NewWeight')} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
