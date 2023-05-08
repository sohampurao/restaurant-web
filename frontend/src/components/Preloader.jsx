import React from 'react';
import '../assets/css/base.css'

export default function Preloader(props) {
  return (
    <>
    <div id="preloader" className={props.class}>
            <img src="/images/common/preloader/menu-preloader.gif" alt="preloader img"/>
    </div>
    </>
  )
}
