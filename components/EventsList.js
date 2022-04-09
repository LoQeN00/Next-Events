import React from 'react'
import EventListItem from './EventListItem'
import * as eventListStyles from '../styles/event-list.module.css'

const EventsList = ({items}) => {

    const itemsElements = items.map(event => (
        <EventListItem key={event.id} event={event} />
    ))


    return (
        <ul className={eventListStyles.list}>
            {itemsElements}
        </ul>
    )
}

export default EventsList
