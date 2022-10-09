import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'
import MaterialSymbolsIcon from './MaterialSymbolsIcon'
import Typography from './Typography'

interface Props {
  isOpen?: boolean
  onClose?: () => void
}

type TopBarMenuLinkProps = LinkProps & {
  isActive?: boolean
}

const SidebarWrapper = styled.aside<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Divider = styled.div`
  border-radius: 0.3125rem;
  background-color: ${(props) => props.theme.colors.accent};
  height: 5px;
  width: 1rem;
`

const MenuItemLinkWrapper = styled.div<{ isActive: boolean }>`
  margin-top: 1rem;

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

function MenuLink({ children, to, isActive, ...props }: TopBarMenuLinkProps) {
  const resolved = useResolvedPath(to)
  const matched = useMatch({ path: resolved.pathname, end: true })

  return (
    <MenuItemLinkWrapper isActive={isActive || !!matched}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </MenuItemLinkWrapper>
  )
}

export default function Sidebar({ isOpen, onClose }: Props) {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarHeader>
        <MaterialSymbolsIcon
          iconName="close"
          type="rounded"
          onClick={onClose}
        />
      </SidebarHeader>
      <Typography size="xl">navigation</Typography>
      <Divider />
      <MenuLink to="/" onClick={onClose}>
        Home
      </MenuLink>
      <MenuLink to="/blog" onClick={onClose}>
        Blog
      </MenuLink>
      <MenuLink to="/resume" onClick={onClose}>
        Resume
      </MenuLink>
      <MenuLink to="/work-in-progress" onClick={onClose}>
        Work in Progress
      </MenuLink>
    </SidebarWrapper>
  )
}
