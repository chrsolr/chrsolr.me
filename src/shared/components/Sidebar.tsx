import React from 'react'
import styled from 'styled-components'

interface Props {
  isOpen?: boolean
}

const Wrapper = styled.aside<{ isOpen?: boolean }>`
  padding: 7.25rem 0 1rem 0;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) =>
    props.isOpen
      ? '0 0 0.625rem rgba(0, 0, 0, 0.3)'
      : '0 0 0.625rem rgba(0, 0, 0, 0)'};
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  bottom: 0;
  transition: ${(props) =>
    props.isOpen
      ? 'right 300ms ease, box-shadow 300ms ease 300ms'
      : 'right 300ms ease 300ms, box-shadow 300ms ease'};

  @media ${(props) => props.theme.deviceSizes.md} {
    width: 50%;
    right: ${(props) => (props.isOpen ? '0' : '-50%')};
  }

  @media ${(props) => props.theme.deviceSizes.lg} {
    width: 50%;
    right: ${(props) => (props.isOpen ? '0' : '-50%')};
  }

  @media ${(props) => props.theme.deviceSizes.xl} {
    width: 25%;
    right: ${(props) => (props.isOpen ? '0' : '-25%')};
  }
`

function Sidebar({ isOpen }: Props) {
  console.log('isOpen', isOpen)
  return (
    <Wrapper isOpen={isOpen}>
      <h2 style={{ textAlign: 'center' }}>navigation</h2>
    </Wrapper>
  )
}

export default Sidebar
