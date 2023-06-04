import './MyPosts.css'
import Post from './Post';

const MyPosts = (props) => {
    return (
      <div className="conetnt__posts">
        <h2 className="content__title">My posts</h2>
        <div className="content__send-post">
          <textarea
            className="content__send-text"
            placeholder="your news..."
            name="your news"
            id=""
            cols="30"
            rows="2"
          ></textarea>
          <button className="button content__send-button">Send</button>
        </div>
        <Post message='Hi, how are u?' likesCounter='15'/>
        <Post message='It`s my first post' likesCounter='23'/>
      </div>
    );
}
 
export default MyPosts;