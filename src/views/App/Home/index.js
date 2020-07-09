import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { months } from '../../../mocks/months';

import firebase from '../../../services/firebase';

import { ListMounths, Container, Layout, Card } from '../../../components';

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
          {/* {list.map((value) => (
            <View
              style={{
                backgroundColor: '#ccc',
                width: '80%',
                padding: 20,
                marginBottom: 10,
              }}
            >
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <View>
                  <Text>Peso</Text>
                  <Text>{value.weight}</Text>
                </View>
                <View>
                  <Text>% de Gordura</Text>
                  <Text>{value.fatPercentage}</Text>
                </View>
                <View>
                  <Text>Peso em Gordura</Text>
                  <Text>{value.fatWeight}</Text>
                </View>
              </View>
            </View>
          ))}
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#222',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              position: 'absolute',
              bottom: 25,
              right: 20,
            }}
            onPress={() => navigation.navigate('NewWeight')}
          >
            <Text style={{ fontSize: 20, color: '#fff' }}>+</Text>
          </TouchableOpacity> */}
        </Container>
      </Layout>
    </>
  );
};

export default Home;
