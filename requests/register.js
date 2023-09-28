import axios from 'axios'

const URL = 'https://test-task.test211.workers.dev'

const register = async (data) => {
    const response = await axios.post(URL + '/user', data)
    return response.data
};

export default register;