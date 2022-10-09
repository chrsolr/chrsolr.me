import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '../Typography'

interface Props {
  activeIndexes?: number
}

const ContentWrapper = styled.div`
  display: flex;

  > div:nth-child(2),
  > div:nth-child(4) {
    margin-right: 2rem;
  }
`
const Circle = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accent : props.theme.colors.foreground};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0.5rem;
`

function digitsToArray(digit: number) {
  const digits = digit
    .toString()
    .split('')
    .map((n) => +n)
  return digits.length > 1 ? digits : [0, ...digits]
}

function BinaryClockGroup({ activeIndexes }: Props) {
  const actives = [false, false, false, false]
  activeIndexes
    ?.toString(2)
    .split('')
    .reverse()
    .forEach((v, i) => {
      actives[i] = v !== '0'
    })
  console.log('activeIndexes', activeIndexes, actives)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {actives.reverse().map((value) => (
        <Circle isActive={value} />
      ))}
    </div>
  )
}

export default function BinaryClock() {
  const [time, setTime] = useState({ hours: [], minutes: [], seconds: [] })

  setInterval(() => {
    const date = new Date()
    const currentTime = {
      hours: digitsToArray(date.getHours()),
      minutes: digitsToArray(date.getMinutes()),
      seconds: digitsToArray(date.getSeconds()),
    }
    setTime(currentTime as any)
  }, 1000)

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ContentWrapper>
        <BinaryClockGroup activeIndexes={time.hours[0]} />
        <BinaryClockGroup activeIndexes={time.hours[1]} />

        <BinaryClockGroup activeIndexes={time.minutes[0]} />
        <BinaryClockGroup activeIndexes={time.minutes[1]} />

        <BinaryClockGroup activeIndexes={time.seconds[0]} />
        <BinaryClockGroup activeIndexes={time.seconds[1]} />
      </ContentWrapper>
      <Typography size="xxl">
        {time.hours[0]}
        {time.hours[1]} : {time.minutes[0]}
        {time.minutes[1]} : {time.seconds[0]}
        {time.seconds[1]}
      </Typography>
    </div>
  )
}
