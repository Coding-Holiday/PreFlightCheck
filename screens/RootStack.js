import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import AddNameScreen from './AddNameScreen';
import SelectScreen from './SelectScreen';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import MyPageScreen from './MyPageScreen';
import ParkingScreen from './ParkingScreen';
import CalendarScreen from './CalendarScreen';
import ParkingFee from './ParkingFee';
import NoticeScreen from './NoticeScreen';

const stack = createNativeStackNavigator();

function RootStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
      }}>
      <stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name={'MyPage'}
        component={MyPageScreen}
        options={{
          headerTitle: '마이 페이지',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'notice'}
        component={NoticeScreen}
        options={{
          headerTitle: '오픈소스 라이선스',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'ParkingFee'}
        component={ParkingFee}
        options={{
          headerTitle: '주차요금계산',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'Parking'}
        component={ParkingScreen}
        options={{
          headerTitle: '주차 정보',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'Add'}
        component={AddScreen}
        options={{
          headerTitle: '세부 일정 추가',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'Calendar'}
        component={CalendarScreen}
        options={{
          headerTitle: '일정 추가',
          headerStyle: {backgroundColor: '#020812'},
          headerTitleStyle: {color: 'white'},
        }}
      />
      <stack.Screen
        name={'Select'}
        component={SelectScreen}
        options={{
          headerTitle: '일정 목록',
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: '#020812'},
        }}
      />
      <stack.Screen
        name={'AddName'}
        component={AddNameScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
}

export default RootStack;
