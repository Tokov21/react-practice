function UserCard(props) {
  const makeJSX = props.trueFriends.map((el, index) => {
    return (
      <li key={index}>
        <div>
          {el.firstName} {el.lastName}, {el.age}
        </div>
        <div>{el.email}</div>
      </li>
    );
  });

  return makeJSX;
}

export default UserCard;
