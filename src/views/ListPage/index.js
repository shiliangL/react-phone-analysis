import React, { Component } from "react";
import { Grid } from "antd-mobile";
import CardList from "@/components/CardList";
import { fetchList } from "@/api";
import { getImgData } from "@/utlis";

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetchList()
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { data } = this.state;
    const imgs = getImgData();
    const datas = imgs.map(item => ({ icon: item }));

    return (
      <div className="ListPage">
        <Grid
          className="ListPage-Grid"
          data={datas}
          columnNum={2}
          renderItem={dataItem => (
            <div style={{ padding: "12.5px" }}>
              <img
                src={dataItem.icon}
                style={{ width: "75px", height: "75px" }}
                alt=""
              />
              <div
                style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}
              >
                <span>I am title..</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
