import React from 'react';
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return <div className='widgetSm'>
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <img src="https://www.whats-on-netflix.com/wp-content/uploads/2018/09/naruto-on-netflix.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Naruto</span>
            <span className="widgetSmUserTitle">Shinobi</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilityIcon   className="widgetSmIcon"/>
          Display
          </button>
        </li>
       <li className="widgetSmListItem">
        <img src="https://i.pinimg.com/736x/0b/b9/f0/0bb9f02c90db2c753fa05141703080a2.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sauske</span>
            <span className="widgetSmUserTitle">Shinobi</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilityIcon className="widgetSmIcon"/>
          Display
          </button>
        </li>
       <li className="widgetSmListItem">
        <img src="https://media.comicbook.com/2021/01/black-clover-asta-post-timeskip-spade-kingdom-arc-makeover-anime-1251306.jpeg?auto=webp" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Asta</span>
            <span className="widgetSmUserTitle">Knight</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilityIcon className="widgetSmIcon"/>
          Display
          </button>
        </li>
       <li className="widgetSmListItem">
        <img src="https://i.pinimg.com/originals/e8/27/af/e827af6fc27e84d4fce3636179f27c99.png" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saitam</span>
            <span className="widgetSmUserTitle">Hero</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilityIcon className="widgetSmIcon"/>
          Display
          </button>
        </li>
       <li className="widgetSmListItem">
        <img src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/04/luffy.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Luffy</span>
            <span className="widgetSmUserTitle">Pirates</span>
          </div>
          <button className='widgetSmButton'>
          <VisibilityIcon className="widgetSmIcon"/>
          Display
          </button>
        </li>
      </ul>
  </div>;
}

export default WidgetSm;
