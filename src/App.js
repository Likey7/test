import React from 'react';
import { Text, View, Button } from 'react-native';

const App = () => {
    return(
        <view
        style={{
            flex:1,
            backgroundColor:'#fff',
            alignItems: 'center',
            justifyContent:'center',
        }}
        >
            <Text style={{fontSize:30, marginBottom:10}}>Props</Text>
            <Button title='Button' />
        </view>
    );
};

export default App;