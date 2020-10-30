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
  console.log(pageSettingsByPath[currentPageId])

  const { pageAnimation } = pageSettingsByPath[currentPageId]

  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        key={currentPageId}
        timeout={{
          enter: pageAnimation?.enter || 500,
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
