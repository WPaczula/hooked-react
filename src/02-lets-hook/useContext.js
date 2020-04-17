import React from 'react';

const Context = React.createContext();

// old way
const BackgroundContextUser = () => {
  return (
    <Context.Consumer>
      {(color) => (
        <div
          style={{
            backgroundColor: color,
            height: '5vw',
            width: '5vw',
            borderRadius: '15px',
          }}
        />
      )}
    </Context.Consumer>
  );
};

const WithContext = () => {
  return (
    <Context.Provider value="#09D3AC">
      <BackgroundContextUser />
    </Context.Provider>
  );
};

export default WithContext;
