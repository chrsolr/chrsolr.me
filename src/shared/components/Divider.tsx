import styled from 'styled-components'

const Divider = styled.div`
  border-radius: 0.3125rem;
  background-color: ${(props) => props.theme.colors.accent};
  height: 5px;
  width: 1rem;
`

export default Divider
