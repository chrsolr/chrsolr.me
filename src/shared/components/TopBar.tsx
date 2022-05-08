import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  headerTitle: string[]
}

const StyledTopBarContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  padding: ${(props) => props.theme.spacing.xxl};
  position: fixed;
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
`

const StyledBrandHeader = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeigths.semibold};
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
`

const StyledLinkWrapper = styled.div`
  display: flex;

  div {
    padding: 0 ${(props) => props.theme.spacing.base};

    &:last-child {
      padding-right: 0;
    }

    a {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: none;

      &:before,
      &:after {
        color: ${(props) => props.theme.colors.primary};
        position: relative;
        opacity: 0;
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
  }
`

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
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <Link to="/nn-match">No Match</Link>
          </div>
        </StyledLinkWrapper>
      </StyledTopBarContainer>
      <Outlet />
    </>
  )
}
