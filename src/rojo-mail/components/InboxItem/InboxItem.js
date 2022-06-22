import React, { useState, useRef } from 'react'
import MaterialIcon from 'material-icons-react'
import moment from 'moment'

import { Attachment } from '../Attachment'

import { DUMMY_EMAILS } from '../../utils/consts'

import './InboxItem.css'

export function InboxItem(props) {
    const selectedEmail =
        DUMMY_EMAILS[Math.floor(Math.random() * DUMMY_EMAILS.length)]

    const selectedEmailRef = useRef(selectedEmail)

    const [isHovering, setIsHovering] = useState(false)

    const handleClick = () => {
        props.onItemClick()
    }

    const renderAttachments = () => {
        const { preview } = props

        if (!preview) {
            return null
        }

        return (
            <div className="InboxItem__attachments">
                {preview.images.map((image) => {
                    return <Attachment key={image.id} source={image.source} />
                })}
            </div>
        )
    }

    const { created, alreadySeen } = props

    let dateString

    const isCurrentDate = moment(created).isSame(new Date(), 'day')
    if (isCurrentDate) {
        dateString = moment(created).format('hh:mm a')
    } else {
        dateString = moment(created).format('MMM D')
    }

    const itemClass = alreadySeen ? 'InboxItem InboxItem--seen' : 'InboxItem'

    return (
        <div
            className={itemClass}
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="InboxItem__main">
                <span className="InboxItem__square">
                    <MaterialIcon icon="crop_square" />
                </span>

                <span className="InboxItem__star">
                    <MaterialIcon icon="star_border" />
                </span>

                {isHovering ? (
                    <p className="InboxItem__title">{props.title}</p>
                ) : (
                    <div className="InboxItemRow">
                        <p className="InboxItem__title">
                            {selectedEmailRef.current.from}
                        </p>
                        <p className="InboxItem__body">
                            {selectedEmailRef.current.body}
                        </p>
                        <p className="InboxItem__sub">
                            {selectedEmailRef.current.sub}
                        </p>
                    </div>
                )}

                <p className="InboxItem__date">{dateString}</p>
            </div>

            {renderAttachments()}
        </div>
    )
}
