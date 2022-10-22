import PropTypes from 'prop-types';
import { ProfileContainer, DescriptionContainer, AvatarImg, NameParagraph, TagParagraph, LocationParagraph, StatsList, StatsItem, LabelSpan, QuantitySpan } from './styles/Profile.styled';

export default function Profile({ userName, userTag, userLocation, userAvatar, followers, views, likes }) {
    return (
        <ProfileContainer>
            <DescriptionContainer>
                <AvatarImg src={userAvatar} alt="User avatar"/>
                <NameParagraph>{userName}</NameParagraph>
                <TagParagraph>@{userTag}</TagParagraph>
                <LocationParagraph>{userLocation}</LocationParagraph>
            </DescriptionContainer>
            <StatsList>
                <StatsItem>
                    <LabelSpan>Followers</LabelSpan>
                    <QuantitySpan>{followers}</QuantitySpan>
                </StatsItem>
                <StatsItem>
                    <LabelSpan>Views</LabelSpan>
                    <QuantitySpan>{views}</QuantitySpan>
                </StatsItem>
                <StatsItem>
                    <LabelSpan>Likes</LabelSpan>
                    <QuantitySpan>{likes}</QuantitySpan>
                </StatsItem>
            </StatsList>
        </ProfileContainer>)
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