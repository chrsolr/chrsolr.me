import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

interface Props {
  isOpen?: boolean
  onMenuClick?: () => void
}

type TopBarMenuLinkProps = LinkProps & {
  isActive?: boolean
}

const Wrapper = styled.aside<{ isOpen?: boolean }>`
  text-align: center;
  padding: 7.25rem 0 1rem 0;
  background-color: ${(props) => props.theme.colors.grey[50]};
  box-shadow: ${(props) =>
    props.isOpen
      ? '0 0 0.625rem rgba(0, 0, 0, 0.3)'
      : '0 0 0.625rem rgba(0, 0, 0, 0)'};
  position: fixed;
  width: 100%;
  z-index: 900;
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

const StyledMenuLink = styled.div<{ isActive: boolean }>`
  &:last-child {
    padding-right: 0;
  }

  a {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    text-decoration: none;

    &:before,
    &:after {
      color: ${(props) => props.theme.colors.primary};
      position: relative;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
      transition: all 0.3s ease;
    }

    &:before {
      content: '[ ';
      transform: translate3d(-15px, 0, 0);
    }

    &:after {
      content: ' ]';
      transform: translateX(15px);
    }

    &:hover {
      color: ${(props) => props.theme.colors.secondary};

      &:before,
      &:after {
        opacity: 1;
      }
    }
  }
`

function TopBarMenuLink({
  children,
  to,
  isActive,
  ...props
}: TopBarMenuLinkProps) {
  const resolved = useResolvedPath(to)
  const macthed = useMatch({ path: resolved.pathname, end: true })

  return (
    <StyledMenuLink isActive={isActive || !!macthed}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </StyledMenuLink>
  )
}

function Sidebar({ isOpen, onMenuClick }: Props) {
  console.log('isOpen', isOpen)
  return (
    <Wrapper isOpen={isOpen}>
      <h2 style={{ textAlign: 'center' }}>navigation</h2>
      <span onClick={onMenuClick}>∴</span>
      <TopBarMenuLink to="/">Home</TopBarMenuLink>
      <TopBarMenuLink to="/blog">Blog</TopBarMenuLink>
      <TopBarMenuLink to="/nothing-here">No Match</TopBarMenuLink>
    </Wrapper>
  )
}

export default Sidebar
