export const useLocalStorage = () => {
  const getValue = <T>(key: string, defaultValue: T) => {
    const item = localStorage.getItem(key)

    if (!item) {
      return defaultValue
    }

    const value = JSON.parse(localStorage.getItem(key) ?? '')

    if (value) {
      return value
    }

    return defaultValue
  }

  const setValue = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { storeInLocalStorage: setValue, retrieveFromLocalStorage: getValue }
}
