import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { months } from '../../../mocks/months';

const screenWidth = Math.round(Dimensions.get('window').width);
const thirdW = screenWidth / 3;

const Home = () => {
  const today = new Date();
  const MonthRef = useRef();

  const [selectedMounth, setSelectedMounth] = useState(today.getMonth());

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

  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
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
                key={k}
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
    </View>
  );
};

export default Home;
