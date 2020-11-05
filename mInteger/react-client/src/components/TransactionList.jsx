import React from 'react';

const TransactionList = () => (
  <div className="txn">
    <h3>Transactions</h3>
    <div className="txn-table">
      <div className="txn-header txn-row">
        <div className="txn-data">Date</div>
        <div className="txn-data">Description</div>
        <div className="txn-data">Amount</div>
      </div>
      <div className="txn-row">
        <div className="txn-data">2017-08-02</div>
        <div className="txn-data">EQUATOR</div>
        <div className="txn-data">-4.00</div>
      </div>
      <div className="txn-row">
        <div className="txn-data">2017-08-02</div>
        <div className="txn-data">CHIPOTLE</div>
        <div className="txn-data">-9.19</div>
      </div>
      <div className="txn-row">
        <div className="txn-data">2017-08-03</div>
        <div className="txn-data">BLUE BOTTLE</div>
        <div className="txn-data">-13.29</div>
      </div>
    </div>
  </div>
);

export default TransactionList;
