import apisauce from 'apisauce'

const create = (baseURL = 'https://tranthjenhao.000webhostapp.com/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
    },
    timeout: 10000
  })

  const getDish = () => api.get('get_random_foods.php')
  const getCategory = () => api.get('get_categories.php')

  return {
    getDish,
    getCategory,
  }
}

// let's return back our create method as the default.
export default {
  create
}
