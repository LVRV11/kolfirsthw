import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendListItemStyled = styled.li`
  display: flex; 
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #444;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FriendStatusStyled = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
`;

export const FriendAvatarStyled = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
  object-fit: cover;
  border-radius: 50%;
`;

export const FriendNameStyled = styled.p`
  margin: 0;
  padding: 0;
`;