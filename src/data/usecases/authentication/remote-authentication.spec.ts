import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    // spy captura valores para poder comparar e coloca valores fakes
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy)
    await systemUnderTest.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
