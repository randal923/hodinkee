export default interface ILocalStorage {
  setItem: (key: string, value: string) => void
  getItem: (key: string) => string
  removeItem: (key: string) => void
}
