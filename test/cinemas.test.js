const axios = require('axios')

let timestamp1, timestamp2
describe( 'CINEMA MOVIES', () => {
  test('POST', async() => {
    const body = { 'Cinema1':'Finding Nemo' }
    const response = await axios.post('http://localhost:5000/v1/cinema', body)
    timestamp1 = response.data.timestamp
    expect( response.status ).toEqual( 200 )
    expect( response.data.key ).toEqual('Cinema1')
    expect( response.data.value ).toEqual('Finding Nemo')
    expect( response.data.timestamp ).toBeDefined()
  })
  test('POST TO EXISTING CINEMA', async() => {
    const body = { 'Cinema1':'The Purge' }
    const response = await axios.post('http://localhost:5000/v1/cinema', body)
    timestamp2 = response.data.timestamp
    expect( response.status ).toEqual( 200 )
    expect( response.data.key ).toEqual('Cinema1')
    expect( response.data.value ).toEqual('The Purge')
    expect( response.data.timestamp ).toBeDefined()
  })
  test('GET MOVIE BY CINEMA', async() => {
    const response = await axios.get('http://localhost:5000/v1/cinema/Cinema1')
    expect( response.status ).toEqual( 200 )
    expect( response.data.cinema1 ).toEqual('the purge')
  })
  test('GET MOVIE BY TIMESTAMP', async() => {
    const response1 = await axios.get(`http://localhost:5000/v1/cinema/Cinema1?timestamp=${timestamp1}`)
    const response2 = await axios.get(`http://localhost:5000/v1/cinema/Cinema1?timestamp=${timestamp2}`)
    expect( response1.status ).toEqual( 200 )
    expect( response1.data.cinema1 ).toEqual('finding nemo')
    expect( response2.status ).toEqual( 200 )
    expect( response2.data.cinema1 ).toEqual('the purge')
  })
})
