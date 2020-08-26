import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Ticket from './components/Ticket';
import PopUpSearch from './components/PopUpSearch';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [counter, setCounter] = useState(0);
  const [restore, setRestore] = useState(1);

  // open with the initial tickets list

  useEffect(() => {
    fetch('/api/tickets')
      .then((res) => res.json())
      .then((res) => { setTickets(res); });
  }, []);

  // set the tickets with ticket component for every ticket in list
  const renderTickets = () => tickets.map((ticket) => (
    <Ticket
      key={ticket.id}
      title={ticket.title}
      content={ticket.content}
      email={ticket.userEmail}
      time={new Date(ticket.creationTime).toISOString().slice(0, -5).replace('T', ' ')}
      labels={ticket.labels}
      increaseCounter={() => setCounter((counter) => counter + 1)}
      restore={restore}
    />
  ));

  // search function
  const search = (input) => {
    const url = `/api/tickets?searchText=${encodeURIComponent(input)}`;
    fetch(url).then((res) => res.json()).then((res) => setTickets(res));
  };

  // restore
  const restoreTickets = () => {
    setCounter(0);
    setRestore((restore) => restore * -1);
  };

  // return to app
  return (
    <main className="main">
      <Header />
      <Counter counter={counter} restore={restoreTickets} />
      {renderTickets()}
      <PopUpSearch search={(input) => search(input)} />
    </main>
  );
}

export default App;
