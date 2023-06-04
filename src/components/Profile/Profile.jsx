import './Profile.css'
import MyPosts from './myPosts/Post/MyPosts';

const Profile = () => {
    return (
      <div className="content">
        <div className="content__img">
          <img
            src="https://i.ytimg.com/vi/5BajgPa3aUU/maxresdefault.jpg"
            alt="photo"
          />
        </div>
        <div className="content__person">ava+name</div>
        <MyPosts />
      </div>
    );
}
 
export default Profile;