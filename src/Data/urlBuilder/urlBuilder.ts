import IUrlBuilder from './urlBuilder.interface'

class UrlBuilder implements IUrlBuilder {
  getPosts(): string {
    const url =
      'https://newsapi.org/v2/everything?q=watches&sortBy=popularity&apiKey=d2fc94872d8d49a2a31dc8c7f6266d7f'
    return url
  }
}

export default new UrlBuilder()
