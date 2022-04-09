import React from 'react'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
// import {getEventById} from '../../dummy-data'
import {getEventById,getFeaturedEvents} from '../../helpers/api-util'
import Comments from '../../components/input/comments'

const EventDetailPage = ({event}) => {

    // const eventId = router.query.eventid

    // const event = getEventById(eventId)

    if (!event) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }

    

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
             />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </>
    )
}

export async function getStaticProps(context) {

    

    const eventId = context.params.eventid

    const event = await getEventById(eventId)

    if (!event) {
        return {
            props: {}
        }
    }
 
    return {
        props: {
           event: event
        },
        revalidate: 30
    }

}


export async function getStaticPaths() {

    const events = await getFeaturedEvents()

    const paths = events.map(item => {
        return {
            params: {
                eventid: item.id
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking'
        
    }
}

export default EventDetailPage
