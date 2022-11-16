import styled from 'styled-components'


const Tag = styled.span<{

}>`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 2.5rem;
  padding: 0.5rem;
`

export default Tag
