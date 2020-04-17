import React from 'react';
import Comparison from './comparison.png';

const Solutions = () => {
  return (
    <>
      <section>
        <h1>Hooki - nie każdy bohater nosi pelerynę 🦸</h1>
      </section>
      <section>
        <h2>Reużywalność logiki</h2>
        <p>
          👉 Custom Hooki pozwalają wydzielać logikę ze stanem bez potrzeby
          zmiany hierarchii komponentów.
        </p>
        <p>
          👉 "You can npm install an even greater percentage of your application
          code than before". https://github.com/rehooks/awesome-react-hooks
        </p>
        <p>👉 Brak wymaganego boilerplate'u.</p>
      </section>
      <section>
        <h2>
          {' '}
          Sklejona, rozproszona logika w componentDidMount / componentDidUpdate
          w dużych komponentach
        </h2>
        <p>👉 zmiana mindsetu z lifecycle na "synchronizację stanu" 🧝</p>
        <img src={Comparison} />
      </section>
      <section>
        <h2> Klasy są fe (przynajmniej w jsie 😅)</h2>
        <p>👉 Same komponenty funkcyjne</p>
        <p>👉 Szybszy refactor stateless na stateful.</p>
        <p>👉 Brak *this'a* łatwiejszy do ogaru.</p>
        <p>
          👉 Klasy są trudne efektywnej do prekompilacji komponentów (co team
          Reacta chce wykorzystać w przyszłości)
        </p>
      </section>
    </>
  );
};

export default Solutions;
