import React from 'react'
import styled from 'styled-components'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  isResponsive?: boolean
  isRounded?: boolean
}

const StyledImage = styled.img<{
  isResponsive?: boolean
  isRounded?: boolean
}>`
  width: ${(props) => (props.isResponsive ? '100%' : null)};
  border-radius: ${(props) => props.isRounded ? '50%' : props.theme.dimensions.borderRadius};
  margin-bottom: 1rem;
`

export default function Image({ isResponsive, isRounded, ...props }: Props) {
  return <StyledImage isResponsive={isResponsive} isRounded={isRounded} {...props} />
}
