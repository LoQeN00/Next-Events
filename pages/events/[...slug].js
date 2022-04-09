import React from 'react'
import { useRouter } from 'next/router'
import {getFilteredEvents} from '../../helpers/api-util'
import EventList from '../../components/EventsList'
import Link from 'next/link'

const FilterEventsPage = ({filteredItems}) => {

   

   if (!filteredItems) return <p className="center">Loading..</p>

   


//    const numYear = +year;
//    const numMonth = +month;

//    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//        return <p>Invalid filter. Please adjust your values</p>
//    }

//    const filter = {
//        year: numYear,
//        month: numMonth
//    }

  

//    const items = getFilteredEvents(filter)

    return (
        <div>
            {filteredItems.length > 0 ? <EventList items={filteredItems} /> : <p>Sorry. We couldnt find any events with this date <Link href="/events">Back to Events</Link></p> }
            
        </div>
    )
}


export async function getServerSideProps(context) {

   

    const filterData = context.params.slug

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: {}
        }
    }

    const filter = {
        year: numYear,
        month: numMonth
    }

    const filteredItems = await getFilteredEvents(filter)
 
    return{
        props: {
            filteredItems
        }
    }
}


export default FilterEventsPage
