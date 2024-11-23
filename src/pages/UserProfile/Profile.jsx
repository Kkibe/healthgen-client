import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Holder from '../../assets/image7.png'
import './Profile.scss';


const GalleryItem = ({ imageSrc, likes, comments, type }) => {
    return (
      <div className="gallery-item" tabIndex="0">
        <img src={imageSrc} className="gallery-image" alt="Gallery Item" />
        {type && (
          <div className="gallery-item-type">
            <span className="visually-hidden">{type}</span>
            <i className={'fas fa-video'} aria-hidden="true"></i>
          </div>
        )}
        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i> {likes}
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i> {comments}
            </li>
          </ul>
        </div>
      </div>
    );
  };

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div className='user-profile'>
            <div className="cover-photo">
                <img src={Holder} alt="" className='profile-image' crossOrigin="anonymous"/>
                <div className="btn-container">
                  <button >Edit Profile</button>
                  <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div className="profile-user-settings">
                <div className="user-info">
                    <span className="info">@{user && user.username}</span>
                    <span className='info'>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="profile-stats">
                    <li>
                        <span className="profile-stat-count">164</span> posts
                    </li>
                    <li>
                        <span className="profile-stat-count">188</span> books
                    </li>
                    <li>
                        <span className="profile-stat-count">206</span> downloads
                    </li>
                </div>
            </div>

        <div className="gallery">
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes={56}
            comments={2}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
            likes={89}
            comments={5}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
            likes={42}
            comments={1}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
            type="Video"
            likes={38}
            comments={0}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
            likes={47}
            comments={1}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
            likes={94}
            comments={3}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
            likes={52}
            comments={4}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
            likes={66}
            comments={2}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
            likes={45}
            comments={0}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
            likes={34}
            comments={1}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
            likes={41}
            comments={0}
          />
          <GalleryItem
            imageSrc="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
            type="Video"
            likes={30}
            comments={2}
          />
        </div>
        </div>
    );
}

export default Profile;
