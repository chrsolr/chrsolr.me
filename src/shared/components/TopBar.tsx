import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'
import MaterialSymbolsRoundedIcon from './MaterialSymbolsRoundedIcon'

interface Props {
  headerTitle: string[]
  onMenuClick?: () => void
}

const StyledTopBarWrapper = styled.div`
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
`

const StyledBrandHeader = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeigths.light};
  font-size: ${(props) => props.theme.typography.fontSizes.xxl};
  flex: 1;
  /* text-align: center; */

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

const StyledContainer = styled(Container)`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
`

function TopBar({ headerTitle, onMenuClick }: Props) {
  return (
    <>
      <StyledTopBarWrapper>
        <StyledContainer>
          <StyledBrandHeader>
            <Link to="/">
              {headerTitle.map((v) => (
                <span key={v.toString()}>{v}</span>
              ))}
            </Link>
          </StyledBrandHeader>
          <MaterialSymbolsRoundedIcon iconName="menu" onClick={onMenuClick} />
        </StyledContainer>
      </StyledTopBarWrapper>
      <Outlet />
    </>
  )
}

export default TopBar
