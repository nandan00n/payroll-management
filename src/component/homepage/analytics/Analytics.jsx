import React from 'react'
import Navbar from '../../navbar/Navbar'
import Chart from '../chart/Chart';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import './analytics.css'
import {userData }from '../dummyData'
import WidgetLg from '../widgetLg/WidgetLg';
import WidgetSm from '../widgetsm/WidgetSm';

function Analytics() {
  return(
  <>
  <div className='analytics'>
  <Navbar/>
    <Featuredinfo/>
    <Chart data={userData} title="User Analytics" grid dataKey='Active User'/>
    <div className='analyticsWidgets'>
      <WidgetSm/>
      <WidgetLg/>
    </div>
  </div>
    </>
  )
}

export default Analytics;
