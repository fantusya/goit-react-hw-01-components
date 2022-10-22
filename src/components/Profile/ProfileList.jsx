import PropTypes from 'prop-types';
import Profile from "./Profile";
import {ProfileContainer, ProfileListUl, ProfileItem } from './styles/ProfileList.styled';

export default function ProfileList({ items }) {
  return (
      <ProfileContainer>
        <ProfileListUl>
          {items.map(item =>
            <ProfileItem key={item.tag}>
              <Profile
                userName={item.username}
                userTag={item.tag}
                userLocation={item.location}
                userAvatar={item.avatar}
                followers={item.stats.followers}
                views={item.stats.views}
                likes={item.stats.likes}
              />
            </ProfileItem>)
          }
        </ProfileListUl>
      </ProfileContainer>
    )
};

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }))
}