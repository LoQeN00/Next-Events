import React from 'react'
import {getAllEvents} from '../../helpers/api-util'
import EventList from '../../components/EventsList'
import EventSearch  from '../../components/EventsSearch'
import {useRouter} from 'next/router'

const EventsPage = ({allEvents}) => {

    const router = useRouter()

    
    const onSearch = (year,month) => {

        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <>
            <EventSearch onSearch={onSearch} />
            <EventList items={allEvents} />
        </>
    )
}


export async function getStaticProps() {

    const events = await getAllEvents()
 
    return {
        props: {
            allEvents: events
        },
        revalidate: 60
    }

}

export default EventsPage
