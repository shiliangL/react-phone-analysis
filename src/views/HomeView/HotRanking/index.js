// Contact

import React, { Component } from "react";
import { AppTopBar } from "@/components";
import F2 from "@antv/f2";
import _lodash from "lodash";

class HotRanking extends Component {
  initCanvas() {
    const data = [
      { label: "测试", type: "series1", value: 2800 },
      { label: "Mon.", type: "series3", value: 2800 },
      { label: "Mon.", type: "series2",value: 2260 },
      { label: "Tue.", type: "series1", value: 1800 },
      { label: "Tue.", type: "series2", value: 1300 },
      { label: "Wed.", type: "series1", value: 950 },
      { label: "Wed.", type: "series2", value: 900 },
      { label: "Thu.", type: "series1", value: 500 },
      { label: "Thu.", type: "series2", value: 390 },
      { label: "Fri.", type: "series1", value: 170 },
      { label: "Fri.", type: "series2", value: 100 }
    ];

    const chart = new F2.Chart({
      id: "myChart",
      pixelRatio: window.devicePixelRatio
    });

    chart.source(data.reverse(), {
      value: {
        tickInterval: 750
      }
    });
    chart.coord({
      transposed: true
    });

    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: function onChange(obj) {
        const legend = chart.get("legendController").legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.map(item => {
          return (map[item.name] = _lodash.clone(item));
        });
        tooltipItems.map(item => {
          const name = item.name;
          const value = item.value;
          if (map[name]) {
            return (map[name].value = value);
          }
        });
        legend.setItems(_lodash.values(map));
      },
      onHide: function onHide() {
        const legend = chart.get("legendController").legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.axis("label", {
      line: F2.Global._defaultAxis.line,
      grid: null
    });
    chart.axis("value", {
      line: null,
      grid: F2.Global._defaultAxis.grid,
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = "left";
        } else if (index === total - 1) {
          textCfg.textAlign = "right";
        }
        return textCfg;
      }
    });
    chart
      .interval()
      .position("label*value")
      .color("type")
      .adjust({
        type: "dodge",
        marginRatio: 1 / 32
      });
    chart.render();
  }

  componentDidMount() {
    this.initCanvas();
  }

  render() {
    return (
      <div className="ListPage">
        <AppTopBar title={"销售排行"} />
        <canvas id="myChart" width="400" height="260" />
      </div>
    );
  }
}

export default HotRanking;
