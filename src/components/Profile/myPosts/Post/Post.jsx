import './Post.css'

const Post = (props) => {

    return (
      <div className="content__posts">
        <div className="post">
          <div className="post__image"></div>
          <div className="content__post">{props.message}</div>
          <div className="like">
            <span>Like - </span>
            {props.likesCounter}
          </div>
        </div>
      </div>
    );

}
 
export default Post;