const http = new EasyHTTP;

//get users
const url = 'https://jsonplaceholder.typicode.com/users';

// http.get(url).then((data) => {
//   console.log(data);
// })
// .catch(err => console.log(err));



// const data =  {
//   name: 'test',
//   username: 'test',
//   email: 'test@gmail.com'
// }


const data_put = {
  name: 'test2',
  username: 'test',
  email: 'test@gmail.com',
}

//make post requesr
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', data_put)
  .then(res => console.log(res))
  .catch(err => console.log(err));


http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(res => console.log(res))
  .catch(err => console.log(err));
