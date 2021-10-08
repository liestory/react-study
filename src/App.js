import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

class App extends React.Component {


    constructor(props) {
        super(props);

        console.log("constructor")
    }


    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        console.log("render");
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>StarGate </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#30d0fe',
        height: 116,
        justifyContent: 'center',
        paddingLeft: 22,
        paddingTop: 71,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
})

export default App;
