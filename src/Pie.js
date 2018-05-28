import React from 'react';
import PropTypes from 'prop-types';
import {ART, View} from 'react-native';
import * as d3 from 'd3';
import Arc from './Arc';

const {
    Group,
    Surface
} = ART;

const Pie = ({data, innerRadius, outerRadius, padAngle, valueMap}) => {

    const colors = d3.schemeCategory10;

    const arcs = d3
        .pie()
        .value(valueMap)
        .padAngle(padAngle)
        (data);

    const arc = (arcData, index) => {
        return (
            <Arc
                key={`arc-${index}`}
                arcData={arcData}
                color={colors[index]}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
            />
        );
    };

    return (
        <View>
            <Surface
                height={2 * outerRadius}
                width={2 * outerRadius}
            >
                <Group x={outerRadius} y={outerRadius}>
                    {arcs.map((arcData, index) => arc(arcData, index))}
                </Group>
            </Surface>
        </View>
    );

};

Pie.defaultProps = {
    innerRadius: 0,
    valueMap: ((datum) => {
        return datum
    }),
    padAngle: 0.02
};

Pie.propTypes = {
    outerRadius: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    innerRadius: PropTypes.number,
    valueMap: PropTypes.func,
    padAngle: PropTypes.number
};

export default Pie;
