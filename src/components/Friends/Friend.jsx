import PropTypes from 'prop-types';
import {FriendOnline, FriendName } from './styles/Friend.styled';

export default function FriendListItem({ friendName, friendAvatar, onlineFriend }) {
    return (
      <>
        <FriendOnline onlineFriend={onlineFriend}></FriendOnline>
        <img className="avatar" src={friendAvatar} alt="User avatar" width="48" />
        <FriendName>{friendName}</FriendName>
      </>
    )
}

FriendListItem.propTypes = {
    friendName: PropTypes.string.isRequired,
    friendAvatar: PropTypes.string.isRequired,
    onlineFriend: PropTypes.bool.isRequired,
}