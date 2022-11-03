import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    count: 1,
    personName: '',
    comment: '',
    commentsList: [
      {
        id: 1,
        personName: 'Rahul Kumar',
        comment:
          'I liked your work. Get ready for the project ghhgj jdjj hsdh gfgfgfdghjgfgv gfgfgfg ggdg gsgdg jj hggf',
        isCommentLiked: false,
        commentTime: '2022-11-03 19:25:01',
      },
    ],
  }

  onChangingInput = event => {
    this.setState({personName: event.target.value})
  }

  onChangingTextArea = event => {
    this.setState({comment: event.target.value})
  }

  onClickingSubmit = event => {
    const {personName, comment} = this.state
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      personName,
      comment,
      isCommentLiked: false,
      commentTime: new Date(),
    }
    this.setState(prevState => ({
      count: prevState.count + 1,
      personName: '',
      comment: '',
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  commentLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isCommentLiked: !eachComment.isCommentLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, personName, comment, commentsList} = this.state

    /* console.log(
      'count :',
      count,
      ',personName : ',
      personName,
      ',comment : ',
      comment,
      commentsList,
    ) */
    return (
      <div className="main_container">
        <div className="container">
          <h1 className="main_heading">Comments</h1>
          <div className="form_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments_image"
            />
            <div className="inputs_container">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <form>
                <input
                  className="inputs_given"
                  placeholder="Your Name"
                  onChange={this.onChangingInput}
                  value={personName}
                />
                <textarea
                  className="inputs_given"
                  rows="4"
                  placeholder="Your Comment"
                  onChange={this.onChangingTextArea}
                  value={comment}
                />
                <button
                  type="submit"
                  className="add_button"
                  onClick={this.onClickingSubmit}
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr />
          <p className="comments_heading">
            <span className="comments_count">{count}</span> Comments
          </p>
          {commentsList.length > 0 ? (
            <ul>
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  initialColor={initialContainerBackgroundClassNames[0]}
                  commentLiked={this.commentLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default Comments
