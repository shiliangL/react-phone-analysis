import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

@withRouter
class NavTabBar extends Component {

  render() {

    const { data, onClick, location } = this.props

    return (
      <div className="fixed-bottom">
        <TabBar>
          {
            data.map(item => {
              return <TabBar.Item
                unselectedTintColor="#949494"
                tintColor="#00c2b3"
                icon={<div 
                  className={ item.class }
                  style={{
                  width: '22px',
                  height: '22px',
                }} />
                }
                selectedIcon={<div 
                  className={item.selectedClass }
                  style={{
                  width: '22px',
                  height: '22px',
                }}
                />
                }
                onPress={() => {
                  onClick(item);
                }}
                selected={item.path === location.pathname}
                title={item.title}
                key={item.path}>
              </TabBar.Item>
            })
          }
        </TabBar>
      </div>
    )
  }
}

export default NavTabBar
