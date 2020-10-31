import './_header.css'

import React, { FC } from 'react'

import { A } from 'hookrouter'

const Header: FC = (): JSX.Element => {
  return (
    <header className="Header">
      <A href="/login">Login</A>
    </header>
  )
}

export default Header
