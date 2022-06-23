import React from 'react'

import { EmailActionBar } from '../../components/EmailActionBar'
import { EmailComments } from '../../components/EmailComments'
import { EmailButton } from '../../components/EmailButton'
import { EmailSenderHeader } from '../../components/EmailSenderHeader'
import { EmailAttachment } from '../../components/EmailAttachment'
import { EmailAttachmentsRow } from '../../components/EmailAttachmentsRow'

import './Email.css'

export function Email(props) {
    const { onBack, post } = props
    const { data } = post

    if (!post) {
        return null
    }

    // const renderAttachments = () => {
    //     const { preview } = data

    //     if (!preview) {
    //         return null
    //     }

    //     return (
    //         <div className="InboxItem__attachments">
    //             {preview.images.map((image) => {
    //                 return (
    //                     <EmailAttachment key={image.id} source={image.source} />
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    return (
        <div className="SingleView">
            <EmailActionBar onBack={onBack} />

            <div className="SingleViewContainer">
                <div className="SingleViewContent">
                    <div className="SingleViewContent__title">{data.title}</div>

                    <EmailSenderHeader post={data} />

                    {data.media && data.media.reddit_video.fallback_url && (
                        <video controls={true}>
                            <source
                                src={
                                    data.secure_media.reddit_video.fallback_url
                                }
                                type="video/mp4"
                            />
                        </video>
                    )}

                    {/* {renderAttachments()} */}

                    <EmailAttachmentsRow data={data} />

                    <div className="SingleViewContent__content">
                        {data.selftext}
                    </div>

                    <div className="SingleViewContent__content">
                        comments {data.num_comments}
                    </div>
                    <div className="SingleViewContent__content">
                        upvotes {data.score}
                    </div>
                    <div className="SingleViewContent__content">
                        <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            perma link
                        </a>
                    </div>
                </div>
            </div>

            <EmailComments post={data} />

            <div className="SingleViewFooter">
                <EmailButton icon="reply" text="Reply" />
                <EmailButton icon="reply_all" text="Reply All" />
                <EmailButton icon="forward" text="Forward" />
            </div>
        </div>
    )
}
