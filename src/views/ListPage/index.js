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

    return (
      <div className="ListPage">
        列表
      </div>
    );
  }
}
