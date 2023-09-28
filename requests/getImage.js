import axios from "axios";
const URL = 'https://test-task.test211.workers.dev'

const getImage = async (token) => {
    const CONFIG = {
        headers: {
          'token-tt': token,
        },
      }
    try{
        const response = await axios.get(URL + '/account/image', CONFIG)
        if(response.status === 200){
            return response
        }
    }catch(e){
        console.log(e);
    }
   
};

