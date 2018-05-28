import React from 'react';
import PropTypes from 'prop-types';
import {ART} from 'react-native';
import * as d3 from 'd3';

const {
    Shape
} = ART;

const Arc = ({arcData, color, innerRadius, outerRadius}) => {

    const arc = d3
        .arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        (arcData);

    return (
        <Shape
            d={arc}
            fill={color}
            stroke='#000'
            strokeWidth={1}
        />
    );
};

Arc.propTypes = {
    color: PropTypes.string,
    outerRadius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    arcData: PropTypes.object.isRequired
};

Arc.defaultProps = {
    color: '#000'
};

export default Arc;