import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import Button from '../../common/Button/Button';


const sendOrder = (address, name, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    address,
    name,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({address, name, options, tripCost, setOrderOption}) => {
  const isEnabled = options.name.length >= 1 && options.contact.length >= 1;
  return (
    <Row className={styles.component}> 
      {pricing.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary cost={tripCost} options={options}/>
        <Button disabled={!isEnabled} onClick={() => sendOrder(address, name, options, tripCost)}>Order now!</Button>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  address: PropTypes.string,
  name: PropTypes.string,
};

export default OrderForm;