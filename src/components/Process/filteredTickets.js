export default function filteredTickets(array, transfersNumber) {
    if (transfersNumber === 0) {
      return array.filter((ticket) => ticket.stops === 0)
    };
    if (transfersNumber) {
      return array.filter((ticket) => ticket.stops === transfersNumber)
    };
    return array
  }