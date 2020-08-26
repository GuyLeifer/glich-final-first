import React from 'react';
import './Counter.css';

function Counter(props) {
  return (
    props.counter > 0
      ? (
        <div className="counter">
          <div className="counterSentence">
            There
            {' '}
            {props.counter === 1 ? 'is' : 'are'}
            {' '}
            <span id="hideTicketsCounter">{props.counter}</span>
            {' '}
            Tickets hidden
            <button id="restoreHideTickets" onClick={props.restore}>restore</button>
          </div>
        </div>
      )
      : <div />
  );
}

export default Counter;
