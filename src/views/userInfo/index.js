// Stuff
import React, { Component } from 'react';
import { Result, Icon, InputItem, Button, WhiteSpace} from 'antd-mobile';
import PageBlank from '@/components/PageBlank';

class UserInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 1
    }
  }

  userUpdate(){
    
  }


  render() {

    const { type } = this.state

    const myImg = src => <img src={src} className="user-header" alt="" />;

    const personal = () => {
      return <div>
        <InputItem ref={el => this.InputItemName = el} placeholder="">
          个人
          </InputItem>
        <InputItem ref={el => this.InputItemKey = el} placeholder="">
          个人
          </InputItem>
      </div>
    }

    const company = () => {
      return <div>
        <InputItem ref={el => this.InputItemName = el} placeholder="">
          公司
          </InputItem>
        <InputItem ref={el => this.InputItemKey = el} placeholder="">
          公司
          </InputItem>
      </div>
    }
    return (
      <PageBlank>
        <Result
          img={myImg('https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg')}
          title="shiliangL"
          message="鸡汤使人落后,老鼠永恒"
        />
        {type === 1 ? company() : personal() }
        <WhiteSpace />
        <Button type="primary">确认</Button>
      </PageBlank>
    );
  }
}

export default UserInfo;
