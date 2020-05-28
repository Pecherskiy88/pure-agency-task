import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.css';

const FinalBlock = ({ price }) => {
  return (
    <div className={s.container}>
      <button type="button" className={s.primaryCard}>
        <div className={s.btnRow}>
          <div className={s.checkBlock}>
            <div className={s.circle} />
            <span className={s.btnText}>TaxGig Hero</span>
          </div>
          <div className={s.priceBlock}>
            <p className={s.priceLabel}>Fixed price</p>
            <p className={s.price}>{`${price}$`}</p>
          </div>
        </div>
      </button>

      <button type="button" className={s.secondaryCard}>
        <div className={s.circle} />
        <span className={s.btnText}>Find another Pro</span>
      </button>
    </div>
  );
};

FinalBlock.defaultProps = {
  price: 0,
};

FinalBlock.propTypes = {
  price: PropTypes.number.isRequired,
};

export default FinalBlock;
