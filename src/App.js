import React from 'react';
/*
import person from './Data/person';
const App = () => {
  return (
    <div>
      <h1>Uma dada pessoa</h1>
      <p>Idade: {person.idade}</p>
      <p>Gênero *operador &&: {person.genero} {person.genero === "Feminino" && ("🌻")}</p>
      <p>Gênero *operador ternário: {person.genero} {(person.genero === "Feminino") ? ("🌻") : ("🚹")}</p>
    </div>
  );
};
*/
import './App.css';
import people from './Data/people';
const App = () => {
  return (
    <div>
      <h1>Uma dada pessoa</h1>
      {
        people.map(
          (p) => (
            <div className='card'>
              <h2>Nome: {p.nome}</h2>
              <p>Idade: {p.idade} anos</p>
              <p>Altura: {p.altura} m</p>
              <p>Peso: {p.peso} kg</p>
              <p>IMC: {p.peso / Math.pow(p.altura,2)} {((p.peso / Math.pow(p.altura,2)) > 25) && ('==> ⚠️')}</p>
            </div>
          )
        )

      }
    </div>
  );
};
export default App;