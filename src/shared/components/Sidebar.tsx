import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'
import MaterialSymbolsIcon from './MaterialSymbolsIcon'
import { useLocalStorage } from './../../hooks/useLocalStorage'

interface Props {
  isOpen?: boolean
  onMenuClick?: () => void
}

type TopBarMenuLinkProps = LinkProps & {
  isActive?: boolean
}

const SidebarWrapper = styled.aside<{ isOpen?: boolean }>`
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
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
      ? 'right 250ms ease, box-shadow 250ms ease 250ms'
      : 'right 250ms ease 250ms, box-shadow 250ms ease'};

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

const SidebarHeader = styled.header`
  height: ${(props) => props.theme.dimensions.topbarHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuItemLinkWrapper = styled.div<{ isActive: boolean }>`
  &:last-child {
    padding-right: 0;
  }

  a {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.accent
        : props.theme.colors.foreground};
    text-decoration: none;

    &:before,
    &:after {
      color: ${(props) => props.theme.colors.foreground};
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
      color: ${(props) => props.theme.colors.accent};

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
    <MenuItemLinkWrapper isActive={isActive || !!macthed}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </MenuItemLinkWrapper>
  )
}

function Sidebar({ isOpen, onMenuClick }: Props) {
  const [, setTheme] = useLocalStorage('theme', 'light')
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarHeader>
        <MaterialSymbolsIcon
          iconName="close"
          type="rounded"
          onClick={onMenuClick}
        />
      </SidebarHeader>
      <h2 style={{ textAlign: 'center' }}>navigation</h2>
      <span
        onClick={() => {
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }}
      >
        ∴
      </span>
      <TopBarMenuLink to="/" onClick={onMenuClick}>
        Home
      </TopBarMenuLink>
      <TopBarMenuLink to="/blog" onClick={onMenuClick}>
        Blog
      </TopBarMenuLink>
      <TopBarMenuLink to="/nothing-here" onClick={onMenuClick}>
        No Match
      </TopBarMenuLink>
    </SidebarWrapper>
  )
}

export default Sidebar
