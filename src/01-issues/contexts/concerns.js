/* eslint-disable no-undef */
import React, { Component } from 'react';

export default class MixingConcerns extends Component {
  componentDidMount() {
    const { time, id, dataStructure } = this.props;

    if (time !== undefined && dataStructure !== undefined) {
      this.setState(calculateState(id));
    }
  }

  componentDidUpdate(prevProps) {
    const { time, id, dataStructure } = this.props;

    if (
      (time !== undefined && dataStructure !== undefined) ||
      prevProps.id !== id ||
      prevProps.dataStructure !== dataStructure ||
      prevProps.time !== time
    ) {
      this.setState(calculateState(id));

      if (id === 0) {
        this.setState(calculateState(undefined));
      }
    }
  }

  render() {
    return <div>Halo 🙋‍♂️</div>;
  }
}
