import PropTypes from 'prop-types';
import FriendListItem from './Friend';
import { FriendContainer, FriendListUl, FriendItem } from './styles/FriendList.styled';

export default function FriendList({ friends }) {
  return (
      <FriendContainer>
        <FriendListUl>
          {friends.map(friend =>
            <FriendItem key={friend.id}>
              <FriendListItem
                friendName={friend.name}
                friendAvatar={friend.avatar}
                onlineFriend={friend.isOnline}
              />
            </FriendItem>)
          }
        </FriendListUl>
      </FriendContainer>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}