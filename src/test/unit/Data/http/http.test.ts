import { Http } from '../../../../Data/http'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('Http test suite', () => {
  const dataMock = {
    id: 'any_id',
    tile: 'any_title',
    text: 'any_text'
  }

  const url = faker.internet.url()

  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should get correct response from GET request', async () => {
    axiosMock.get.mockResolvedValue({
      data: [dataMock]
    })

    const response = await Http.get(url)
    expect(response).toEqual([dataMock])
  })
})
