import { useState } from 'react';
import './index.css';

// TODO:
// 1. Сгенерировать колоду карточек из EMOJIS
// 2. Реализовать логику кликов, открытия/закрытия и проверки пары
// 3. Сделать верстку поля для игры
// 3. (по возможности) реализовать рестарт игры
// 4. (по возможности) добавить счётчик ходов

const EMOJIS = ['🍎', '🍌', '🍇', '🍓', '🍋', '🍉', '🍍', '🥝'];
const QUESTION_EMOJI = '❓';

export default function App() {
  const [cards, setCards] = useState([]);

  const handleCardClick = () => { };
  const handleRestart = () => { };

  return (
    <div className="App">
      <h1>Memory game </h1>

      <div>
        {cards.map(() => (
          <div />
        ))}
      </div>

      <button onClick={handleRestart}>Restart</button>

    </div>
  );
}
