import React, { FC, useRef } from 'react'

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
  const pageAnimation = pageSettingsByPath?.[currentPageId]?.pageAnimation

  const prevPageAnimation = useRef(pageAnimation)

  const prevNextEnter = prevPageAnimation.current?.nextEnter

  prevPageAnimation.current = pageAnimation

  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        key={currentPageId}
        timeout={{
          enter: prevNextEnter === 0 ? 0 : prevNextEnter || pageAnimation?.enter || 500,
          exit: pageAnimation?.exit || 500,
          appear: pageAnimation?.appear || 0,
        }}
        classNames={currentPageId}
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  )
}

export default RoutesAnimation
