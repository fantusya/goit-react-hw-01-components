import PropTypes from 'prop-types';
import FriendListItem from './Friend';

export default function FriendList({ friends }) {
    return (
      <ul className="friend-list list">
        {friends.map(friend =>
          <li className="item" key={friend.id}>
            <FriendListItem
              friendName={friend.name}
              friendAvatar={friend.avatar}
              onlineFriend={friend.isOnline}
            />
          </li>)
        }
      </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}