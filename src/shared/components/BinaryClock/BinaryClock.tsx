import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '../Typography'
import { useInterval } from '../../../hooks/useInterval'

type BinaryClockTime = {
  hours: readonly [number, number]
  minutes: readonly [number, number]
  seconds: readonly [number, number]
}

interface Props {
  activeIndexes?: number
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;

  > div:nth-child(2),
  > div:nth-child(4) {
    margin-right: 1rem;
  }
`
const Pad = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accent : props.theme.colors.foreground};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  width: 5vw;
  height: 5vw;
  margin: 0.5rem;
`

/**
 * Create Current Time String
 */
function getClockTimeLabel(timeAsDigits: BinaryClockTime) {
  const hours = timeAsDigits.hours.join('')
  const minutes = timeAsDigits.minutes.join('')
  const seconds = timeAsDigits.seconds.join('')
  return `${hours} : ${minutes} : ${seconds}`
}

/**
 * Split an hour, minute or second to a tuple
 * e.g. 15 -> [1,5] || 5 -> [0,5]
 */
function splitDigitToTuple(digit: number): [number, number] {
  const split = digit
    .toString()
    .split('')
    .map((n) => +n)
  const isSingleDigit = split.length === 1
  return [isSingleDigit ? 0 : split[0], isSingleDigit ? split[0] : split[1]]
}

// TODO: CLEAN-UP
function BinaryClockGroup({ activeIndexes }: Props) {
  const defaultState = [false, false, false, false]
  activeIndexes
    ?.toString(2)
    .split('')
    .reverse()
    .forEach((v, i) => {
      defaultState[i] = v !== '0'
    })
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {defaultState.reverse().map((value) => (
        <Pad isActive={value} />
      ))}
    </div>
  )
}

export default function BinaryClock() {
  const [timeAsDigits, setTimeAsDigits] = useState<BinaryClockTime>({
    hours: [0, 0],
    minutes: [0, 0],
    seconds: [0, 0],
  })

  useInterval(() => {
    const date = new Date()
    const currentTime = {
      hours: splitDigitToTuple(date.getHours()),
      minutes: splitDigitToTuple(date.getMinutes()),
      seconds: splitDigitToTuple(date.getSeconds()),
    }
    setTimeAsDigits(currentTime)
  }, 1000)

  return (
    <MainContent>
      <ContentWrapper>
        <BinaryClockGroup activeIndexes={timeAsDigits.hours[0]} />
        <BinaryClockGroup activeIndexes={timeAsDigits.hours[1]} />

        <BinaryClockGroup activeIndexes={timeAsDigits.minutes[0]} />
        <BinaryClockGroup activeIndexes={timeAsDigits.minutes[1]} />

        <BinaryClockGroup activeIndexes={timeAsDigits.seconds[0]} />
        <BinaryClockGroup activeIndexes={timeAsDigits.seconds[1]} />
      </ContentWrapper>
      <Typography size="xxl">{getClockTimeLabel(timeAsDigits)}</Typography>
    </MainContent>
  )
}
