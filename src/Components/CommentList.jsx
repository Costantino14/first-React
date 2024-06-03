import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({comments}) {
  return (
    <SingleComment comments={comments}/>
  )
}
