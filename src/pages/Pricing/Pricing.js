import React from 'react';
import './Pricing.scss';

export function Pricing() {
  return (
      <div className="pricing-table">
        <div className="pricing-element">
          <div className="pricing-price">45.99$</div>
          <div className="pricing-name">Normal</div>
          <div className="pricing-benefits">Benefits: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et excepturi id itaque libero quasi reiciendis! Atque ea ipsam labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi, doloribus facere nam non numquam odit omnis quidem rerum sint?</div>
        </div>
        <div className="pricing-element">
          <div className="pricing-price">65.99$</div>
          <div className="pricing-name">Premium</div>
          <div className="pricing-benefits">Benefits: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et excepturi id itaque libero quasi reiciendis! Atque ea ipsam labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi, doloribus facere nam non numquam odit omnis quidem rerum sint?</div>
        </div>
        <div className="pricing-element">
          <div className="pricing-price">99.99$</div>
          <div className="pricing-name">MegaPaka</div>
          <div className="pricing-benefits">Benefits: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et excepturi id itaque libero quasi reiciendis! Atque ea ipsam labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi, doloribus facere nam non numquam odit omnis quidem rerum sint?</div>
        </div>
      </div>
  );
}
