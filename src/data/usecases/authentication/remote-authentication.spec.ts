import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from './../../protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    // spy captura valores para poder comparar e coloca valores fakes
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy)
    await systemUnderTest.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
