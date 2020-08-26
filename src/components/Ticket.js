import React, { useEffect, useState } from 'react';
import './Ticket.css';

function Ticket(props) {
  // set the labels

  //   if (props.labels) {
  //     var labels = props.labels.map((label) => (
  //       <span className="label">{label}</span>
  //     ));
  //   }

  // counter + class change
  const [klass, setKlass] = useState('ticket');
  const isHide = () => {
    setKlass('hiddenTicket');
    props.increaseCounter();
  };

  // restore

  useEffect(() => setKlass('ticket'), [props.restore]);

  // return

  return (
    <div className={klass}>
      <button className="hideTicketButton" onClick={isHide}>Hide</button>
      <h1>{props.title}</h1>
      <div className="content">{props.content}</div>
      <div className="footer">
        <div className="info">
          <span>
            Email:
            {props.email}
          </span>
          {' '}
          |
          <span>
            Date:
            {props.time}
          </span>
        </div>
        <div className="labels">
          {props.labels ? props.labels.map((label) => (
            <span className="label">{label}</span>
          )) : '' }
        </div>
      </div>

    </div>
  );
}

export default Ticket;
