import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <section className="main">
      <div className="main__wrapper">
        <h1 className="main__title">Ты сегодня покормил кота?</h1>
        <ul className="main__list">
          <Card title="с фуа-гра" weight="0,5" count="10" present={1} descriptionText="Печень утки разварная с артишоками." disableText="Печалька, с фуа-гра закончился." isDisable={false} />
          <Card title="с рыбой" weight="2" count="40" present={2} descriptionText="Головы щучьи с чесноком да свежайшая сёмгушка." disableText="Печалька, с рыбой закончился." isDisable={false} />
          <Card title="с курой" weight="5" count="100" present={5} descriptionText="Филе из цыплят с трюфелями в бульоне." disableText="Печалька, с курой закончился." isDisable={true} />
        </ul>
      </div>
    </section>
  );
}

export default App;
