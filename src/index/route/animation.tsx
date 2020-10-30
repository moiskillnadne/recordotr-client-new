import React, { FC } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

type RoutesAnimationProps = {
  children: {
    props: {
      className: string
    }
  }
}

const RoutesAnimation: FC<RoutesAnimationProps> = ({ children }): JSX.Element => {
  return (
    <SwitchTransition mode="in-out">
      <CSSTransition key={children.props.className} timeout={5000} classNames="Hookrouter" unmountOnExit>
        {children}
      </CSSTransition>
    </SwitchTransition>
  )
}

export default RoutesAnimation
