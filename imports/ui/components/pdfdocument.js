import React from 'react';
import InlineCss from 'react-inline-css';

export const PdfInvoice = ({ invoice }) => (
  <InlineCss stylesheet={`
      .PdfInvoice {
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
      .header {
        text-align: right;
      }
      h5#invoice {
        font-size: 12px;
        color:  #696969;
        margin-top: -10px;
      }
      hr {
        border: 0;
        height: 1px;
        background: #333;
        background-image: linear-gradient(to right, #ccc, #333, #ccc);
        margin: -15px;
      }

      p { 
        margin-top: 10px;
        margin-bottom: 0px;
        font-size: 18px;
      }
      
  `}> 
      <div className='header'>
        <h5 id='invoice'>Invoice</h5>
        <hr />
      </div>
      <div>
        <h6>Biller: {invoice.biller}</h6>
        <h6>Biller: {invoice.biller}</h6>
      </div>
      <h3>{ invoice.biller }</h3>
      <p>{ invoice.totalPrice }</p>
  
  </InlineCss>
);

PdfInvoice.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

