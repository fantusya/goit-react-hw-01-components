import PropTypes from 'prop-types';
import Profile from "./Profile";

export default function ProfileList({ items }) {
    return (
        <ul className="list">
          {items.map(item =>
            <li key={item.tag}>
              <Profile
                userName={item.username}
                userTag={item.tag}
                userLocation={item.location}
                userAvatar={item.avatar}
                followers={item.stats.followers}
                views={item.stats.views}
                likes={item.stats.likes}
              />
            </li>)
          }
        </ul>
    )
};

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }))
}