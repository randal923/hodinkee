import IUrlBuilder from './urlBuilder.interface'

class UrlBuilder implements IUrlBuilder {
  getPosts(): string {
    const url =
      'https://newsapi.org/v2/everything?q=watches&sortBy=popularity&apiKey=3a654c9a233e40ba9ed259f6a9fe6d73'
    return url
  }
}

export default new UrlBuilder()
