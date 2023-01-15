import axios from 'axios'

const form = new FormData()
form.append('allowPlatformToOperateToken', 'true')
form.append('chain', 'goerli')
form.append('name', 'StudySpotBronze')
form.append('description', '1 hour of studying, good job!')
form.append('recipientAddress', '0x57873816969c06Eb2dF7b56681E4A7502D2D0F69')

const options = {
  method: 'POST',
  url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
  headers: {
    accept: 'application/json',
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
    'X-API-Key': 'sk_live_f1a35199-d5b7-4277-be64-a838a210ceb2',
  },
  data: '[form]',
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
