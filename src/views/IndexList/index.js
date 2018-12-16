import React, { Component } from "react";
import { Grid } from "antd-mobile";
import { fetchList } from "@/api";
import { getImgData } from "@/utlis";

export default class IndexList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.onClickItem = this.onClickItem.bind(this);
  }

  componentDidMount() {
    const imgs = getImgData();
    const dataList = [
      { icon: imgs[0], title: '热销分类', to:'/hotClass' },
      { icon: imgs[1], title: '销售排行', to:'/hotRanking' },
      { icon: imgs[2], title: '销售分类', to:'/hotSales' },
      { icon: imgs[3], title: '销售占比', to:'/proportion' },
      { icon: imgs[4], title: '销售达成', to:'/complete' },
      { icon: imgs[5], title: '分类标签', to:'/hotTags' },
    ]

    this.setState({
      data: dataList
    })
 
  }


  onClickItem(item){
    if (!item.to) return
    this.props.history.push(item.to);
  }


  render() {
    const { data } = this.state
    return (
      <div className="ListPage">
        <Grid
          className="ListPage-Grid"
          data={data}
          onClick={ this.onClickItem }
          columnNum={2}
          renderItem={dataItem => (
            <div style={{ padding: "12.5px" }}>
              <img
                src={dataItem.icon}
                style={{ width: "75px", height: "75px" }}
                alt=""/>
              <div style={{ color: "#888", fontSize: "14px", marginTop: "12px" }} >
                <span> { dataItem.title }</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
