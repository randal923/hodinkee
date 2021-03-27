/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPost {
  id: string
  value: {
    title: string
    text: string
  }
  dispatch?: any
}
