import { useMemo, useState } from "react";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Ticket from "./components/Ticket";
import getTickets from "./tickets.json";
import filteredTickets from "./components/Process/filteredTickets";

function App() {
  const [tickets, setTickets] = useState(getTickets.tickets);
  const [stopsFilter, setStopsFilter] = useState(null);
  const [valuteNames, setValuteNames] = useState("P");

  const ticketsList = useMemo(() => {
    return filteredTickets(tickets, stopsFilter);
  }, [tickets, stopsFilter]);

  return (
    <div className="App">
      <LeftSideBar
        setValuteNames={setValuteNames}
        setStopsFilter={setStopsFilter}
      />
      <div>
        {ticketsList.map(
          ({
            price,
            stops,
            carrier,
            arrival_time,
            arrival_date,
            departure_time,
            departure_date,
            destination_name,
            destination,
            origin_name,
            origin,
          }) => (
            <Ticket
              key={Math.random()}
              valuteNames={valuteNames}
              price={price}
              stops={stops}
              carrier={carrier}
              arrivalTime={arrival_time}
              arrivalDate={arrival_date}
              departureTime={departure_time}
              departureDate={departure_date}
              destination={destination}
              destinationName={destination_name}
              originName={origin_name}
              origin={origin}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
