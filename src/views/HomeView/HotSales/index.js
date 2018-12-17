// Contact

import React, { Component } from "react";
import { AppTopBar } from "@/components";
import F2 from "@antv/f2";

class HotSales extends Component {
  initCanvas() {
	  const data = [
			{ year: '2014 年', sales: 145 }, 
			{ year: '2015 年', sales: 121 }, 
			{ year: '2016 年', sales: 100 }, 
			{ year: '2017 年', sales: 97 }, 
			{ year: '2018 年', sales: 85 }
		];
	  const chart = new F2.Chart({
			id: 'myChart',
		  pixelRatio: window.devicePixelRatio
	  });

	  chart.source(data, {
		  sales: {
			  tickCount: 5
		  }
		});
		
	  chart.tooltip({
		  showItemMarker: false,
		  onShow: function onShow(ev) {
			  const items = ev.items;
			  items[0].name = null;
			  items[0].name = items[0].title;
			  items[0].value = '¥ ' + items[0].value;
		  }
	  });

	  // 让柱状图的宽度适配不同的屏幕尺寸
	  const barWidth = 36 * (window.innerWidth / 375);

	  chart.interval().position('year*sales').color('l(90) 0:#1890ff 1:#70cdd0') // 定义柱状图渐变色
		  .size(barWidth);
	  chart.render();
  }

  componentDidMount() {
	this.initCanvas();
  }

  render() {
	return (
	  <div className="ListPage">
		<AppTopBar title={"销售分类"} />
		<canvas id="myChart" width="400" height="260" />
	  </div>
	);
  }
}

export default HotSales;
