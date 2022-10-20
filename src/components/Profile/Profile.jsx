import PropTypes from 'prop-types';

export default function Profile({ userName, userTag, userLocation, userAvatar, followers, views, likes }) {
    return (
        <div className="profile">
            <div className="description">
                <img src={userAvatar} alt="User avatar" className="avatar" />
                <p className="name">{userName}</p>
                <p className="tag">@{userTag}</p>
                <p className="location">{userLocation}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>)
};

Profile.propTypes = {
    userName: PropTypes.string.isRequired, 
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired, 
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}