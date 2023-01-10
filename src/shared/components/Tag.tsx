import styled from 'styled-components'
import { darken } from 'polished'


const Tag = styled.span`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 2.5rem;
  padding: 0.25rem 1rem;
  margin: 0 0.5rem;
  min-width: 5rem;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  
  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.accent)};
  }
`

export default Tag
