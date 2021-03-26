import ILocalStorage from './localStorage.interface'

class LocalStorage implements ILocalStorage {
  localStorage

  constructor() {
    this.localStorage = localStorage
  }

  setItem(key: string, value: string): void {
    return this.localStorage.setItem(key, value)
  }

  getItem(key: string): string {
    const post = this.localStorage.getItem(key)
    return post ?? 'Post Not Found.'
  }

  removeItem(key: string): void {
    return this.localStorage.removeItem(key)
  }

  editItem(key: string, value: string): string {
    const post = this.getItem(key)

    if (!post) return 'Post not found.'

    this.setItem(key, value)

    return 'Post saved successfully.'
  }
}

export default new LocalStorage()
