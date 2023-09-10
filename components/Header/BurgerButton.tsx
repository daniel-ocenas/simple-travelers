import React from 'react'
import styles from './Header.module.css'

const Burger = ({
  showSidebar,
  buttonState,
}: {
  showSidebar: any
  buttonState: any
}) => {
  return (
    <div className={styles.navbarIcon}>
      <input
        type="checkbox"
        id="hi"
        onChange={showSidebar}
        checked={buttonState}
      />
      <label className="menu" htmlFor="hi">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
    </div>
  )
}

export default Burger
