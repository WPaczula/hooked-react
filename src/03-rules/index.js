import React from 'react';

const Rules = () => {
  return (
    <section>
      <h2>Zasady hakowania</h2>
      <p>👉 Hooki muszą byś wywoływane zawsze w tej samej kolejności</p>
      <p>👉 Nazwa hooka powinna zaczynać się od "use"</p>
      <p>
        👉 Mogą być wywoływane tylko i wyłącznie w komponentach funkcyjnych albo
        innych hookach (nie w klasach i nie w zwykłych funkcjach)
      </p>
      <p>👉 eslint plugin, który sprawdza te rulsy 🎉🎉🎉</p>
    </section>
  );
};

export default Rules;
