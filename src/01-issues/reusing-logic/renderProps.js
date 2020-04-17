import React, { Component } from 'react';

class PassHyperWithRenderProps extends Component {
  render() {
    const hyperFunctionWhichWeWillReuse = () => '😎';
    const { children } = this.props;

    return children(hyperFunctionWhichWeWillReuse);
  }
}

class ButtonWithHyperFunction extends React.Component {
  render() {
    return (
      <PassHyperWithRenderProps>
        {(hyperFunctionWhichWeWillReuse) => (
          <button>{hyperFunctionWhichWeWillReuse()}</button>
        )}
      </PassHyperWithRenderProps>
    );
  }
}

export default ButtonWithHyperFunction;
