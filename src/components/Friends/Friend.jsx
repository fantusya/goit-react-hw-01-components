import PropTypes from 'prop-types';

export default function FriendListItem({ friendName, friendAvatar, onlineFriend }) {
    return (
      <>
        <span className="status">{onlineFriend}</span>
        <img className="avatar" src={friendAvatar} alt="User avatar" width="48" />
        <p className="name">{friendName}</p>
      </>
    )
}

FriendListItem.propTypes = {
    friendName: PropTypes.string.isRequired,
    friendAvatar: PropTypes.string.isRequired,
    onlineFriend: PropTypes.bool.isRequired,
}