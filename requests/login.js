import axios from 'axios'

const URL = 'https://test-task.test211.workers.dev'

const login = async (data) => {

    const response = await axios.post(URL + '/login', data)
    return response.data

}

export default login
