import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import LoadingScreen from './LoadingScreen';

function ParkingFee() {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://www.airport.co.kr/gimpo/cms/frCon/index.do?MENU_ID=1360&CONTENTS_NO=2',
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
      {loading ? <LoadingScreen /> : null}
    </View>
  );
}

export default ParkingFee;
