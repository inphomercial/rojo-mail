import React, { useRef } from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'

import './EmailAttachment.css'

import { DUMMY_FILE_NAMES } from '../../utils/consts'

export function EmailAttachment(props) {
    const { source } = props

    // Gotta fix the &amp; crap.
    const url = source.url.replace(/&amp;/g, '&')

    const fileName = useRef(
        DUMMY_FILE_NAMES[Math.floor(Math.random() * DUMMY_FILE_NAMES.length)]
    )

    return (
        <div className="EmailAttachment">
            <div className="EmailAttachmentPreview">
                <div className="EmailAttachment__image">
                    <span className="EmailAttachment__preview">
                        <img
                            alt="preview"
                            height={source.height}
                            src={url}
                            width={source.width}
                        />
                    </span>
                </div>
            </div>

            <div className="EmailAttachmentBar">
                <span className="EmailAttachment__icon">
                    <MaterialIcon
                        icon="picture_as_pdf"
                        color={colorPalette.red._600}
                    />
                </span>
                <p className="EmailAttachment__fileName">{fileName.current}</p>
                <div className="EmailAttachment__fold"></div>
                <span className="EmailAttachment__corner"></span>
            </div>
        </div>
    )
}
