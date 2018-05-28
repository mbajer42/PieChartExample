import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Pie from './Pie';

export default class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'fat', value: 55},
                {label: 'protein', value: 150},
                {label: 'carbohydrate', value: 255}
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>PieChart</Text>
                <Pie
                    data={this.state.data}
                    outerRadius={100}
                    innerRadius={20}
                    valueMap={(datum) => datum.value}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
