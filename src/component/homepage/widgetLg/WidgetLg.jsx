import React from 'react';
import './widgetLg.css'

function WidgetLg() {
  const Button = ({type})=>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className='widgetLgTr'>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLGName">Tony Stark</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">22,121</td>
          <td className="widgetLgStatus"> <Button type="Approved"/></td>
          
        </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLGName">Tony Stark</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">22,121</td>
          <td className="widgetLgStatus"> <Button type="Pending"/></td>
         
        </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLGName">Tony Stark</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">25,451</td>
          <td className="widgetLgStatus"> <Button type="Declined"/>
          </td>
          
        </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLGName">Tony Stark</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">19,781</td>
          <td className="widgetLgStatus"> <Button type="Approved"/>
          </td>
          
        </tr>
      </table>
  </div>;
}

export default WidgetLg;
