import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../../services/firebase';

import { months } from '../../../mocks/months';

const screenWidth = Math.round(Dimensions.get('window').width);
const thirdW = screenWidth / 3;

const Home = () => {
  const today = new Date();
  const MonthRef = useRef();

  const navigation = useNavigation();

  const [selectedMounth, setSelectedMounth] = useState(today.getMonth());
  const [list, setList] = useState([]);
  const { uid } = firebase.auth().currentUser;

  const handleScrollEnd = (e) => {
    const posX = e.nativeEvent.contentOffset.x;
    const targetMonth = Math.round(posX / thirdW);
    setSelectedMounth(targetMonth);
  };

  const scrollToMonth = (m) => {
    const posX = m * thirdW;
    MonthRef.current.scrollTo({ x: posX, y: 0, animated: true });
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToMonth(selectedMounth);
    }, 1);
  }, [selectedMounth]);

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
    <View style={{ flex: 1 }}>
      <View>
        <ScrollView
          horizontal
          ref={MonthRef}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={thirdW}
          contentContainerStyle={{ paddingLeft: thirdW, paddingRight: thirdW }}
          onMomentumScrollEnd={handleScrollEnd}
          style={{ height: 60 }}
        >
          {months.map((m, k) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity
                key={m}
                style={{
                  width: thirdW,
                  alignItems: 'center',
                }}
                onPress={() => setSelectedMounth(k)}
              >
                <Text style={{ color: k === selectedMounth ? '#00f' : '#000' }}>
                  {m}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {list.map((value) => (
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
