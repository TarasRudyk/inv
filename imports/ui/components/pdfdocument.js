import React from 'react';
import InlineCss from 'react-inline-css';

export const PdfInvoice = ({ invoice, biller, customer }) => (
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
        margin-top: -15px;

      }


      table {
        font-size: 10px;
      }

      .theader {
        background: #DCDCDC;
      }

      .divTable {
        float: right;
      }

      .invoiceTable {
        width: 100%
      }
  `}> 
      <div className='header'>
        <h5 id='invoice'>Invoice</h5>
        <hr />
      </div>
      <div className="divTable">
        <table>
          <tbody>
            <tr>
              <td className="theader"><strong>Biller:</strong></td>
              <td className="theader">{biller.billerName}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{biller.address.street}<br/>{biller.address.city} {biller.address.country} {biller.address.zip}</td>
            </tr>
            <tr>
              <td>Ph. :</td>
              <td>{biller.contacts.phone}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{biller.contacts.email}</td>
            </tr>
            <tr>
              <td>Account No. :</td>
              <td>{biller.accountNumber}</td>
            </tr>
            <tr>
              <td>VAT No. :</td>
              <td>{biller.vat}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td className="theader"><strong>Customer:</strong></td>
              <td className="theader">{customer.customerName}</td>
            </tr>
            <tr>
              <td>Attn. :</td>
              <td>{customer.customerContact}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{customer.address.street}<br />{customer.address.city} {customer.address.country} {customer.address.zip}</td>
            </tr>
            <tr>
              <td>Ph.:</td>
              <td>{customer.contacts.phone}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{customer.contacts.email}</td>
            </tr>
            <tr>
              <td>VAT No. :</td>
              <td>{customer.vat}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div>
        <table>
          <tbody>
            <tr>
              <td className="theader"><strong>Invoice Summery</strong></td>
              <td></td>
            </tr>
            <tr>
              <td>Invoice Id: </td>
              <td>{invoice.Id}</td>
            </tr>
            <tr>
              <td>Date of issue: </td>
              <td>{invoice.issueDate.toString().slice(4, -24)}</td>
            </tr>
            <tr>
              <td>Due date: </td>
              <td>{invoice.dueDate.toString().slice(4, -24)}</td>
            </tr>
            <tr>
              <td><strong>Total: </strong></td>
              <td><strong>{invoice.totalPrice}<span>&nbsp;Kč</span></strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <div>
        <table className="invoiceTable">
          <thead>
            <tr>
              <th className="theader"><strong>Quantity</strong></th>
              <th className="theader"><strong>Item</strong></th>
              <th className="theader"><strong>Unit cost</strong></th>
              <th className="theader"><strong>Price</strong></th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map( item => (
              <tr key={Math.random()}>
                <td>{item.quantity}</td>
                <td>{item.product}</td>
                <td>{item.price}<span>&nbsp;Kč</span></td>
                <td>{(Number(item.price) * Number(item.quantity)).toFixed(2)}<span>&nbsp;Kč</span></td>
              </tr>  
              ))
            }
            <tr>
              <td></td>
              <td></td>
              <td><strong><u>Total Price: </u></strong></td>
              <td><strong><u>{invoice.totalPrice}<span>&nbsp;Kč</span></u></strong></td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <br />

      <div>
        <table className="invoiceTable">
          <thead>
            <tr>
              <th className="theader"><strong>Details</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{invoice.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
  </InlineCss>
);

PdfInvoice.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

