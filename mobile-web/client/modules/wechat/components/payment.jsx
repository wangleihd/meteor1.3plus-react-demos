import React from 'react';
import marked from 'marked'

const listStyle = {
  listStylePosition: 'inside',
  padding: 10
}

const Payment = () => {
  return(
    <div>
      <img src="/imgs/mag.png" width="100%"/>

      <div className="weui_cells_title">
        <span style={{color: 'red', fontSize: '1.2em'}}>微信支付</span>
      </div>

      <div className="weui_cells">
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> &nbsp; </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> &nbsp; </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> &nbsp; </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
      </div>


      <div className="weui_cells_title">
        <span style={{color: 'red', fontSize: '1.2em'}}>银行打款</span>
      </div>

      <div className="weui_cells">
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 户 名 </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 开户行 </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 行 号 </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
        <div className="weui_cell">
          <div className="weui_cell_bd weui_cell_primary">
            <p> 账 号 </p>
          </div>
          <div className="weui_cell_ft">
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
