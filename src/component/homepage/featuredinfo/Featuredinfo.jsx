import React from 'react';
import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Featuredinfo() {
  return <div className='featured'>
            <div className='featuredItem'>
                 <span className='featuredTitle'>Revanue</span>
                 <div className="featuredMoneyContainer">
                   <span className="featuredMoney"> 2,06,656</span>
        <span className="featuredMoneyRate"> -7.9 <ArrowDownwardIcon className='featuredIcon negative'/></span>
                 </div>
                 <span className="featuredSub">Compared to last month</span>
            </div>
    <div className='featuredItem'>
      <span className='featuredTitle'>Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney"> 1,06,696</span>
        <span className="featuredMoneyRate"> -2.9 <ArrowDownwardIcon className='featuredIcon negative'/></span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className='featuredItem'>
      <span className='featuredTitle'>Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney"> 3,06,656</span>
        <span className="featuredMoneyRate"> +1.9 <ArrowUpwardIcon className='featuredIcon positive'/></span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>;
}

export default Featuredinfo;
