
export async function getAllEvents() {
    const response = await fetch("https://events-a2105-default-rtdb.firebaseio.com/events.json")
    const data = await response.json()

    const events = []

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events
}



export async function getFeaturedEvents() {

    const allEvents = await getAllEvents()

    const featuredEvents = allEvents.filter(event => event.isFeatured)

    return featuredEvents
}


export async function getEventById(id) {
    const allEvents = await getAllEvents()

    const searchedEvent = allEvents.find(event => event.id === id)

    return searchedEvent
}

export async function getFilteredEvents(dateFilter) {
    
    const allEvents = await getAllEvents()
    
    const { year, month } = dateFilter;
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }