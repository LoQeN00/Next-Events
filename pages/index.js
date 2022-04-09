import React from 'react'
import EventsList from '../components/EventsList'
// import { getFeaturedEvents } from '../dummy-data.js'
import {getFeaturedEvents} from "../helpers/api-util"
import NewsletterRegistration from "../components/input/newsletter-registration"

const HomePage = ({featuredEvents}) => {

    return (
        <div>
            <NewsletterRegistration />
            <EventsList items={featuredEvents} />
        </div>
    )
}



export async function getStaticProps() {

    const events = await getFeaturedEvents()
 
    return {
        props: {
            featuredEvents: events
        },
        revalidate: 1800
    }

}

export default HomePage
