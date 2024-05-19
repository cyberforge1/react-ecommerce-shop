// OrderSummary.jsx

import React from 'react';
import styles from './OrderSummary.module.scss';

const OrderSummary = ({ subtotal, itemCount }) => {
    return (
        <div className={styles.summary}>
            <div className={styles.summaryHeader}>
                <h2>ORDER SUMMARY</h2>
                <span>{itemCount} ITEM(S)</span>
            </div>
            <div className={styles.summaryDetails}>
                <div className={styles.detailRow}>
                    <span>Item(s) subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.detailRow}>
                    <span>SUBTOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.detailRow}>
                    <span>ORDER TOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.coupon}>
                    <span>Coupon</span>
                    <span>></span>
                </div>
                <div className={styles.deliveryInfo}>
                    <p>
                        Click & Collect to send your parcel to your preferred store with FREE DELIVERY and no minimum spend. Altered items are final sale (no change of mind refund/exchanges).
                    </p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.checkoutButton}>CHECKOUT</button>
                    <button className={styles.continueButton}>CONTINUE SHOPPING</button>
                </div>
                <div className={styles.eligibleInfo}>
                    <span>Eligible for free shipping.</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
