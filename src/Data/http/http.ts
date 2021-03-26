import axios from 'axios'
import { HttpInterface } from './http.interface'

class Http implements HttpInterface {
  async get<T>(url: string): Promise<T> {
    return await axios.get(url).then((response) => response.data)
  }
}

export default new Http()
