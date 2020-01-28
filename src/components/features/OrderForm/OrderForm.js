import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption';
import pricieng from '../../../data/pricing.json';

const OrderForm = props => {
  return (
    <Row>
      {pricieng.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption {...option} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary cost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;