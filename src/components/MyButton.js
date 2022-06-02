import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = props => {
    console.log(props);
    return(
        <TouchableOpacity>
            <Text style={{color: 'white',fontSize: 24}}>{props.title}</Text>
            
        </TouchableOpacity>
    );

};

export default MyButton;