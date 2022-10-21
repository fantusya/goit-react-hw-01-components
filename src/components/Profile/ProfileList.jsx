import PropTypes from 'prop-types';
import Profile from "./Profile";
import { ProfileListUl, ProfileItem } from './ProfileList.styled';

export default function ProfileList({ items }) {
    return (
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
    )
};

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }))
}