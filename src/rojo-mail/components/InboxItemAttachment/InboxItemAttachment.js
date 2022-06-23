import React, { useRef } from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'

import './InboxItemAttachment.css'

import { DUMMY_FILE_NAMES } from '../../utils/consts'

export function InboxItemAttachment(props) {
    const { source } = props

    // Gotta fix the &amp; crap.
    const url = source.url.replace(/&amp;/g, '&')

    const fileName = useRef(
        DUMMY_FILE_NAMES[Math.floor(Math.random() * DUMMY_FILE_NAMES.length)]
    )

    return (
        <div className="Attachment__pill">
            <span className="Attachment__icon">
                <MaterialIcon
                    icon="picture_as_pdf"
                    color={colorPalette.red._600}
                />
            </span>
            <p className="Attachment__fileName">{fileName.current}</p>

            <div className="Attachment__image">
                <span className="Attachment__preview">
                    <img
                        alt="preview"
                        height={source.height}
                        src={url}
                        width={source.width}
                    />
                </span>
            </div>
        </div>
    )
}
