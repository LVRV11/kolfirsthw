import PropTypes from "prop-types";
import { FriendListStyled, FriendListItemStyled, FriendStatusStyled, FriendAvatarStyled, FriendNameStyled } from './FriendList.styled.jsx';


function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemStyled>
      <FriendStatusStyled isOnline={isOnline} />
      <FriendAvatarStyled src={avatar} alt="User avatar" />
      <FriendNameStyled>{name}</FriendNameStyled>
    </FriendListItemStyled>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export function FriendList({ friends }) {
  return (
    <FriendListStyled>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendListStyled>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
