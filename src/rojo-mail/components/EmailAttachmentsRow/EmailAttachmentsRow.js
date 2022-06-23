import React from 'react'

import { EmailAttachment } from '../EmailAttachment'

import './EmailAttachmentsRow.css'

export const EmailAttachmentsRow = (props) => {
    const { preview } = props.data

    if (!preview) return null

    return (
        <div className="EmailAttachmentsRow">
            <div className="InboxItem__attachments">
                {preview.images.map((image) => {
                    return (
                        <EmailAttachment key={image.id} source={image.source} />
                    )
                })}
            </div>
        </div>
    )
}
