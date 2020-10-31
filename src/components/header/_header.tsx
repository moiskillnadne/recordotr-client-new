import './_header.css'

import React, { FC } from 'react'

import { A } from 'hookrouter'

const Header: FC = (): JSX.Element => {
  return (
    <header className="Header">
      <div className="headerContainer">
        <A href="/login">
          <button type="button">Login</button>
        </A>
      </div>
    </header>
  )
}

export default Header
