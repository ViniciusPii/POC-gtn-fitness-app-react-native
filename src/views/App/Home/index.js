import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { months } from '../../../mocks/months';

import firebase from '../../../services/firebase';

import {
  ListMounths,
  Container,
  Layout,
  Card,
  ButtonCircle,
} from '../../../components';

const Home = () => {
  const today = new Date();

  const navigation = useNavigation();

  const [selectedMounth, setSelectedMounth] = useState(today.getMonth());
  const [list, setList] = useState([]);
  const { uid } = firebase.auth().currentUser;

  useEffect(() => {
    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[selectedMounth])
      .on('value', (snap) => {
        setList([]);

        snap.forEach((item) => {
          const newList = {
            key: item.key,
            weight: item.val().weight,
            fatWeight: item.val().fatWeight,
            fatPercentage: item.val().fatPercentage,
          };
          setList((oldArray) => [...oldArray, newList]);
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
          {list.map((value) => (
            <Card data={value} />
          ))}
          <ButtonCircle onPress={() => navigation.navigate('NewWeight')} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
