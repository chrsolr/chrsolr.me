import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  headerTitle: string[]
  onMenuClick?: () => void
}

const StyledTopBarContainer = styled.div`
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  height: 6.25rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 20;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

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
  font-weight: ${(props) => props.theme.typography.fontWeigths.light};
  font-size: ${(props) => props.theme.typography.fontSizes.xxl};
  flex: 1;
  text-align: center;

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
`

const StyledMenuIcon = styled.div`
  background-color: blue;
  border: none;

  &:hover {
    cursor: pointer;
  }

  span {
    background-color: red;
    height: 1px;
    width: 5px;
  }
`

export default function TopBar({ headerTitle, onMenuClick }: Props) {
  return (
    <>
      <StyledTopBarContainer>
        <StyledBrandHeader>
          <Link to="/">
            {headerTitle.map((v) => (
              <span key={v.toString()}>{v}</span>
            ))}
          </Link>
        </StyledBrandHeader>
        <StyledMenuIcon onClick={onMenuClick}>
          X
          <span />
          <span />
          <span />
        </StyledMenuIcon>
      </StyledTopBarContainer>
      <Outlet />
    </>
  )
}
