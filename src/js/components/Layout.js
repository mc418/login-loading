import React from "react";
import { connect } from "react-redux";
// import WhatsYourName from  "./WhatsYourName";
// import {updateName} from "../actions/nameActions";
import LoginForm from "./LoginForm"
import {updateEmail, updatePassword, login} from "../actions/LoginAction"
import Greeting from "./Greeting"
import _ from "lodash"
import {getChats} from "../actions/getChat"
import DisplayChat from "./DisplayChat";

@connect((store) => {          //It allows you to request async data, store them in redux state and connect them to your react component.
  return {
      // name: store.nameReducer.get("name"),
      name: store.nameReducer.name,

      // email: store.loginReducer.email,
      email:store.loginReducer.get("email"),
      password: store.loginReducer.get("password"),
      user: store.loginReducer.get("user"),
      // token: store.loginReducer.token,
      token: store.loginReducer.get("token"),
      // chats: store.chatReducer.chats,
      chats: store.chatReducer.get("chats"),
  };
})
export default class Layout extends React.Component {
  updateName = (e) => {
    const name = e.target.value;
    this.props.dispatch(updateName(name));
  };

  login = (e) => {
    e.preventDefault();
    const {email, password} = this.props;
    this.props.dispatch(login(email, password));
  };

  updateEmail = (e) => this.props.dispatch(updateEmail(e.target.value));

  updatePassword = (e) => this.props.dispatch(updatePassword(e.target.value));
  render() {
    // return <div>
    //   <p>Hello {this.props.name}</p>
    //   <WhatsYourName updateName={this.updateName}/>
    // </div>                                             // the first updateName is just variable, you can name it anything;
    //   // ;the second updateName is call function above
    return (
        <div>
          <LoginForm login={this.login}
                 updateEmail = {this.updateEmail}
                 updatePassword={this.updatePassword}
          />;
            {!_.isEmpty(this.props.user) && <Greeting name ={this.props.user.get("first_name")}/> };
            <DisplayChat chats={this.props.chats} />
        </div>
    )

  }
};

