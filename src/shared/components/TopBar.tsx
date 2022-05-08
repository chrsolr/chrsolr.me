import React from 'react'
import {
  Link,
  LinkProps,
  Outlet,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  headerTitle: string[]
}

const StyledTopBarContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  height: 6.25rem;
  position: fixed;
  left: 0;
  right: 0;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  a {
    text-decoration: none;

    span {
      &:nth-child(1) {
        color: ${(props) => props.theme.colors.primary};
      }

      &:nth-child(2) {
        color: ${(props) => props.theme.colors.secondary};
      }

      &:nth-child(3) {
        color: ${(props) => props.theme.colors.accent};
      }
    }
  }

  @media ${(props) => props.theme.deviceSizes.xs} {
    padding: 0 ${(props) => props.theme.spacing.xs};
  }

  @media ${(props) => props.theme.deviceSizes.sm} {
    padding: 0 ${(props) => props.theme.spacing.sm};
  }

  @media ${(props) => props.theme.deviceSizes.md} {
    padding: 0 ${(props) => props.theme.spacing.md};
  }

  @media ${(props) => props.theme.deviceSizes.lg} {
    padding: 0 ${(props) => props.theme.spacing.lg};
  }

  @media ${(props) => props.theme.deviceSizes.xl} {
    padding: 0 ${(props) => props.theme.spacing.xl};
  }

  @media ${(props) => props.theme.deviceSizes.xxl} {
    padding: 0 ${(props) => props.theme.spacing.xxl};
  }
`

const StyledBrandHeader = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeigths.semibold};
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
`

const StyledLinkWrapper = styled.div`
  display: flex;
`

const StyledMenuLink = styled.div<{ isActive: boolean }>`
  padding: 0 ${(props) => props.theme.spacing.xs};

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

function TopBarMenuLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to)
  const macthed = useMatch({ path: resolved.pathname, end: true })

  return (
    <StyledMenuLink isActive={!!macthed}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </StyledMenuLink>
  )
}

export default function TopBar({ headerTitle }: Props) {
  return (
    <>
      <StyledTopBarContainer>
        <StyledBrandHeader>
          <Link to="/">
            {headerTitle.map((v) => (
              <span>{v}</span>
            ))}
          </Link>
        </StyledBrandHeader>
        <StyledLinkWrapper>
          <TopBarMenuLink to="/">Home</TopBarMenuLink>
          <TopBarMenuLink to="/blog">Blog</TopBarMenuLink>
          <TopBarMenuLink to="/no-match">No Match</TopBarMenuLink>
          <TopBarMenuLink to="/error">Error</TopBarMenuLink>
        </StyledLinkWrapper>
      </StyledTopBarContainer>
      <Outlet />
    </>
  )
}
