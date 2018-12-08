import { Component } from "react";
// import { fetchUserInfo } from "@/api";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


//非路由组件使用路由组件方法
@withRouter
@connect(
  (state)=>{
    return { isLogin: state.isLogin };
  }
)
class AuthRoute extends Component {
  componentDidMount() {
    const { history, isLogin } = this.props;
    if (!isLogin) history.push("/login");
    // const paths = ["/login", "/register"];
    // fetchUserInfo()
    //   .then(({ code }) => {
    //     if (code !== 0 && !paths.includes(location.pathname))
    //       history.push("/login");
    //   })
    //   .catch(e => {`
    //     console.log(e);
    //   });
  }

  render() {
    return null;
  }
}
export default AuthRoute;
