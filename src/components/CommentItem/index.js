// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, initialColor, commentLiked, deleteComment} = props
  const {id, personName, comment, isCommentLiked, commentTime} = commentDetails
  const initial = personName.slice(0, 1)

  const likeImgUrl = isCommentLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isCommentLiked ? 'liked_button_color' : 'like_button_color'

  const onClickingLikeButton = () => {
    commentLiked(id)
  }

  const onClickingDeleteButton = () => {
    deleteComment(id)
  }

  const timeDifference = formatDistanceToNow(new Date(commentTime))

  return (
    <li>
      <div className="comment_container">
        <p>
          <span className={`${initialColor} initial`}>{initial}</span>
        </p>
        <div>
          <p className="person_name">
            {personName}
            <span className="time">{timeDifference}</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like_delete_container">
        <div className="like_button_container">
          <img src={likeImgUrl} alt="like" className="like_image" />
          <button
            type="button"
            className={`${likeColor} like_button`}
            onClick={onClickingLikeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete_button"
          onClick={onClickingDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete_image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
