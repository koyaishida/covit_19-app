import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {

  return (
    <div>
      <div className={styles.row}>
        test
      </div>
    </div>
  );
}
