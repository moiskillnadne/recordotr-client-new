import React, { FC } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { PageSettingsById } from './type'

type RoutesAnimationProps = {
  pageSettingsByPath: PageSettingsById
  currentPageId: string
  children: {
    props: {
      className: string
    }
  }
}

const RoutesAnimation: FC<RoutesAnimationProps> = ({ children, pageSettingsByPath, currentPageId }): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(pageSettingsByPath, currentPageId)

  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        key={children.props.className}
        timeout={{ enter: 0, exit: 500 }}
        classNames="Hookrouter"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  )
}

export default RoutesAnimation
