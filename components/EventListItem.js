import React from 'react'
import Link from 'next/link'
import Button from './ui/Button'
import * as eventListStyles from '../styles/event-item.module.css'
import DateIcon from './icons/date-icon'
import AddressIcon from './icons/address-icon'
import ArrowRightIcon from './icons/arrow-right-icon'

const EventListItem = ({event}) => {

    const {image,title,date,location,id} = event

    const humanRedableDate = new Date(date).toLocaleDateString('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n')

    const exploreLink = `/events/${id}`

    return (
        <li className={eventListStyles.item}>
            <img src={`/${image}`} alt=""/>
            <div className={eventListStyles.content}>
                <div className={eventListStyles.summary}>
                    <h2>{title}</h2>
                    <div className={eventListStyles.date}>
                        <DateIcon />
                        <time>{humanRedableDate}</time>
                    </div>
                    <div className={eventListStyles.address}>
                    <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={eventListStyles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={eventListStyles.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>

                </div>
            </div>
        </li>
    )
}

export default EventListItem
