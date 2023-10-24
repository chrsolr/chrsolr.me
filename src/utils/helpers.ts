import { v4 as uuidv4 } from 'uuid'

export function getUniqueKey(): string {
  return uuidv4()
}

export function mergeTailwindClasses(classes: string) {
  return Array.from(
    new Set(classes.split(' ').filter((v) => v !== 'undefined')),
  ).join(' ')
}
