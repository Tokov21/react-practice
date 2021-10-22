import React from "react";
import FriendList from "../FriendList";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [
        {
          firstName: "Abrham",
          lastName: "Deven",
          age: 23,
          email: "ab.dev@gmail.com",
          isFriend: true,
        },
        {
          firstName: "Delan",
          lastName: "Weberg",
          age: 43,
          email: "delan@gmail.com",
          isFriend: false,
        },
        {
          firstName: "Vonder",
          lastName: "Fulken",
          age: 31,
          email: "fulken@gmail.com",
          isFriend: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        In Friends:
        <ul>
          <FriendList userList={this.state.userList} />
        </ul>
      </div>
    );
  }
}

export default UsersPage;
