import axios from 'axios'

const URL = 'https://test-task.test211.workers.dev'

const putImage = async (base64, token) => {
  const CONFIG = {
    headers: {
      'token-tt': token,
    },
  }
  try{
    const response = await axios.put(URL + '/account/image', {
        image: base64,
      }, CONFIG)
    return response.data
  }catch(e){
    return e
  }


  
}

export default putImage
