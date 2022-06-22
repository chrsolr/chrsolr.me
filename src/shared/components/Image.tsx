import React from 'react'
import styled from 'styled-components'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  isResponsive?: boolean
}

const StyledImage = styled.img<{
  isResponsive?: boolean
}>`
  width: ${(props) => (props.isResponsive ? '100%' : null)};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  margin-bottom: 1rem;
`

export default function Image({ isResponsive, ...props }: Props) {
  return <StyledImage isResponsive={isResponsive} {...props} />
}
