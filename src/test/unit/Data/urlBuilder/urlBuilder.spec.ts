import { UrlBuilder } from '../../../../Data/urlBuilder'
describe('UrlBuilder test suite', () => {
  test('should get the correct URL', () => {
    const url = UrlBuilder.getPosts()
    expect(url).toBe(
      'https://newsapi.org/v2/everything?q=watches&sortBy=popularity&apiKey=3a654c9a233e40ba9ed259f6a9fe6d73'
    )
  })
})
