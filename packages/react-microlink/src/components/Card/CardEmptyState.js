import React, { Fragment } from 'react'
import styled from 'styled-components'

import CardImage from './CardImage'
import { Content } from './CardContent'
import { emptyStateAnimation, emptyStateImageAnimation } from './CardAnimations'

const EmptyImage = CardImage.extend`
  ${emptyStateImageAnimation}
`

const EmptyTitle = styled.span`
  height: 16px;
  width: 80%;
  display: block;
  background: #e1e8ed;
  margin: 2px 0 8px;
  opacity: 0.8;
  ${emptyStateAnimation}
`

const EmptyDescription = styled.span`
  height: 54px;
  width: 100%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
  opacity: 0.8;
  position: relative;
  ${emptyStateAnimation}
  animation-delay: .125s;

  &:before, &:after {
    content: '';
    position: absolute;
    left: -1px;
    right: -1px;
    height: 6px;
    background: #fff;
  }

  &:before {
    top: 14px;
  }

  &:after {
    bottom: 14px;
  }
`

const EmptyLink = styled.span`
  height: 10px;
  width: 60%;
  display: block;
  background: #e1e8ed;
  opacity: 0.8;
  ${emptyStateAnimation}
  animation-delay: .25s;
`

const CardEmptyState = ({cardSize}) => (
  <Fragment>
    <EmptyImage cardSize={cardSize} />
    <Content cardSize={cardSize}>
      <EmptyTitle />
      <EmptyDescription />
      <EmptyLink />
    </Content>
  </Fragment>
)

export default CardEmptyState
