import React from 'react'
import Navbar from '../../navbar/Navbar'
import Chart from '../chart/Chart';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import './home.css'
import {userData }from '../dummyData'
import WidgetLg from '../widgetLg/WidgetLg';
import WidgetSm from '../widgetsm/WidgetSm';

function Home() {
  return(
  <>
  <div className='home'>
  <Navbar/>
 <h1>Home</h1>
 </div>
    </>
  )
}

export default Home;
