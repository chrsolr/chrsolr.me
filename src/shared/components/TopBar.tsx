import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'
import MaterialSymbolsIcon from './MaterialSymbolsIcon'

interface Props {
  headerTitle: string[]
  onMenuClick?: () => void
}

const StyledTopBarWrapper = styled.div`
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  height: ${(props) => props.theme.dimensions.topbarHeight};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 20;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const StyledBrandHeader = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.xxl};
  font-weight: ${(props) => props.theme.typography.fontWeigths.light};
  flex: 1;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent};

    span:nth-child(1) {
      color: ${(props) => props.theme.colors.foreground};
    }

    span:nth-child(2) {
      font-weight: ${(props) => props.theme.typography.fontWeigths.semibold};
    }

    span:nth-child(3) {
      color: ${(props) => props.theme.colors.foreground};
      font-weight: ${(props) => props.theme.typography.fontWeigths.thin};
    }
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
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
          <MaterialSymbolsIcon
            iconName="menu"
            type="rounded"
            onClick={onMenuClick}
          />
        </StyledContainer>
      </StyledTopBarWrapper>
      <Outlet />
    </>
  )
}

export default TopBar
