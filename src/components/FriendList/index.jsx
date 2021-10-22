import UserCard from "./UserCard";

function FriendList(props) {
  const filtered = props.userList.filter((el) => {
    return el.isFriend;
  });

  return <UserCard trueFriends={filtered} />;
}

export default FriendList;
