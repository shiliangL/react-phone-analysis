import React, { Component } from "react";
import { AppTopBar } from "@/components";
import F2 from "@antv/f2";

const _F = F2,
  Shape = _F.Shape,
  G = _F.G,
  Util = _F.Util,
  Global = _F.Global;
const Vector2 = G.Vector2;

export default class Complete extends Component {
  initCanvas() {
    const data = [
      {
        const: "a",
        actual: 60,
        expect: 100
      }
    ];

    const chart = new F2.Chart({
      id: "myChart",
      padding: [0, 30, 60],
      pixelRatio: window.devicePixelRatio
    });

    chart.source(data, {
      actual: {
        max: 100,
        min: 0,
        nice: false
      }
    });

    chart.coord("polar", {
      transposed: true,
      innerRadius: 0.8,
      startAngle: -Math.PI,
      endAngle: 0
    });

    chart.axis(false);
    chart
      .interval()
      .position("const*expect")
      .shape("polar-tick")
      .size(10)
      .color("rgba(80, 143, 255, 0.95)")
      .animate(false); // 背景条

    chart
      .interval()
      .position("const*actual")
      .shape("polar-tick")
      .size(10)
      .color("#fff")
      .animate({
        appear: {
          duration: 1100,
          easing: "linear",
          animation: function animation(shape, animateCfg) {
            let startAngle = shape.attr("startAngle");
            let endAngle = shape.attr("endAngle");
            if (startAngle > endAngle) {
              // -Math.PI/2 到 0
              endAngle += Math.PI * 2;
            }
            shape.attr("endAngle", startAngle);
            shape.animate().to(
                Util.mix(
                  {
                    attrs: {
                      endAngle: endAngle
                    }
                  },
                  animateCfg
                )
              )
              .onUpdate(function(frame) {
                document.getElementById("completeText").innerHTML =
                  parseInt(frame * data[0].actual) + "%";
              });
          }
        }
      }); // 实际进度
    chart.guide().html({
      position: ["50%", "80%"],
      html:
        '<div style="width: 120px;color: #fff;white-space: nowrap;text-align:center;">' +
        '<p style="font-size: 18px;margin:0;">本月进度</p>' +
        '<p id="completeText" style="font-size: 48px;margin:0;font-weight: bold;">0</p>' +
        "</div>"
    });
    chart.render();
  }

  componentDidMount() {
    this.initCanvas();
  }

  render() {
    return <div className="ListPage completeText">
      <AppTopBar title={"销售达成"} mode={'light'} />
        <canvas id="myChart" width="400" height="260" />
      </div>;
  }
}
