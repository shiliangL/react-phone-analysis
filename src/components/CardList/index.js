import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

const CardList =(data=[])=> {
    return (
      <div>
      {
        data.map(item => {
          return <WingBlank size="md" key={item._id}>
            <WhiteSpace size="md" />
            <Card>
              <Card.Header
                title={item.name}
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                <div>This is content of `Card`</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
          </WingBlank>
        })
      }
      </div>
    )
}
 
export default CardList

