import React, { Component, PropTypes } from 'react';
import {
  ART
} from 'react-native';

const {
  Shape
} = ART;

import * as d3 from 'd3';

export default class Arc extends Component {

  constructor(props) {
    super(props);
    this.arc = d3
                .arc()
                .outerRadius(this.props.outerRadius)
                .innerRadius(this.props.innerRadius)
                (this.props.arcData);
  }

  static defaultProps = {
    color: '#000'
  }

  static propTypes = {
    color: PropTypes.string,
    outerRadius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    arcData: PropTypes.object.isRequired
  }

  render() {
    return (
      <Shape d={this.arc} stroke='#000' strokeWidth={1} fill={this.props.color} />
    );
  }
}
