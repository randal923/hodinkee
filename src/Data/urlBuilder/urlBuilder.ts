import IUrlBuilder from './urlBuilder.interface'

class UrlBuilder implements IUrlBuilder {
  getPosts(): string {
    const url = 'http://localhost:5000/schedule'
    return url
  }
}

export default new UrlBuilder()
