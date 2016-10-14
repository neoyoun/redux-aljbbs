import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slidebar.css';
function Slidebar() {
  return (
    <ul className={s.root}>
      <li className={s.item} value="0">全部</li>
      <li className={s.item} value="10">仅看求购</li>
      <li className={s.item} value="20">仅看求售</li>
    </ul>
  );
}

export default withStyles(s)(Slidebar);
