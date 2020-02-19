import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  render() {
    const{title, promoDescription} = this.props;
    return (
      <div>
        <h3 className={'title'}>{title}</h3>
        <p className={'promoDescription'}>{promoDescription}</p>
      </div>
    );
  }
}
export default HappyHourAd;