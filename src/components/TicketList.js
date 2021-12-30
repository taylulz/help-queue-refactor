import React from "react";
import Ticket from './Ticket';

const mainTicketList = [
  {
    names: "Person1 and Person2",
    location: '3a',
    issue: 'ticekt issue'
  },
  {
    names: 'Person3 & Person4',
    location: '4B',
    issue: 'issue description 2'
  },
  {
    names: 'Person5 & Person6',
    location: '9G',
    issue: 'issue desction 3'
  }
]

export default function TicketList() {
  return (
    <>
      <hr />
      {mainTicketList.map((ticket, index) =>
        <Ticket 
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} 
        />
      )}
    </>
  );
}