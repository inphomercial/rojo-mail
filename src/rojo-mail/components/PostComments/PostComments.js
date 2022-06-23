import React, { useEffect, useState } from 'react'

import { fetchData } from '../../utils/http'

import { EmailSenderHeader } from '../EmailSenderHeader'

import { Spinner } from '../Spinner'

export const PostComments = (props) => {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        if (!props.post) return

        const fullPostUrl = `https://api.reddit.com${props.post.permalink}.json`

        fetchData(fullPostUrl).then((comments) => {
            setComments(comments[1].data.children)
        })
    }, [props.post])

    if (!comments) {
        return <Spinner />
    }

    return comments.map((comment) => {
        return (
            <div className="SingleViewCommment" key={comment.data.id}>
                <div className="SingleViewContent__Row">
                    <EmailSenderHeader post={comment.data} />
                </div>

                <div className="SingleViewContent__content">
                    {comment.data.body}
                </div>
            </div>
        )
    })
}
