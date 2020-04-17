import React from 'react';
import PropTypes from 'prop-types';

const withHyperFunction = (WrappedComponent) => {
  const hyperFunctionWhichWeWillReuse = () => '😎';
  const hocComponent = ({ ...props }) => (
    <WrappedComponent
      {...props}
      hyperFunctionWhichWeWillReuse={hyperFunctionWhichWeWillReuse}
    />
  );

  hocComponent.propTypes = {
    hyperFunctionWhichWeWillReuse: PropTypes.func.isRequired,
  };

  return hocComponent;
};

class ButtonWithHyperFunction extends React.Component {
  render() {
    const { hyperFunctionWhichWeWillReuse } = this.props;

    return <button>{hyperFunctionWhichWeWillReuse()}</button>;
  }
}

export default withHyperFunction(ButtonWithHyperFunction);
