import React from 'react';
import Hoc from './reusing-logic/hoc';
import RenderProps from './reusing-logic/renderProps';
import MixingContexts from './contexts/multiple-context.png';
import WrapperHell from './reusing-logic/wrapper-hell.png';
import CanIDelete from './contexts/can-i-delete.png';

const ReuseLogic = () => {
  return (
    <>
      <section>
        <h2>Reużywalność logiki</h2>
        <p style={{ textAlign: 'center' }}>
          Ale przecież mamy HOC i Render props! 🔥
        </p>
        <div
          style={{
            width: '60%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Hoc />
          <RenderProps />
        </div>
      </section>
      <section>
        <p style={{ textAlign: 'center' }}>Jakie możemy uzyskać skutki...</p>
        <img src={WrapperHell} />
      </section>
      <section>
        <h1>ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount 🤯</h1>
      </section>
      <section>
        <h2>Pomieszana logika z paru kontekstów</h2>
        <img src={MixingContexts} />
      </section>
      <section>
        <h2>ciąg dalszy</h2>
        <img src={CanIDelete} />
      </section>
    </>
  );
};

export default ReuseLogic;
