export const PostData = (type, userData) => {
  let BaseURL = 'http://localhost:4000/'

  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error))
  })
}