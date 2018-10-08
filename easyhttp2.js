class EasyHTTP {
  //make an http get request
  get(url) {

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  //make an http post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })

  }


  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => resolve('delete successful'))
        .catch(err => reject(err))
    })
  }


}