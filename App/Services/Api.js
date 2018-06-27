import apisauce from 'apisauce'

const create = (baseURL = 'https://tranthjenhao.000webhostapp.com/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
    },
    timeout: 10000
  })

  const getDish = () => api.get('get_random_foods.php')
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  return {
    getDish,
    getRoot,
    getRate,
    getUser
  }
}

// let's return back our create method as the default.
export default {
  create
}
