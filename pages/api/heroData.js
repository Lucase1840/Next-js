import axios from 'axios'

export default async function handler(req, res) {
  await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=66a8defb62c8a7db93d6c21af958ecd2&hash=f2008f578d691175eb5aefebaf52df1c')
    .then(data => {
      console.log('hola')
      res.send(data.data.data.results)
    })
}

// ENTER http://localhost:3000/api/heroData TO SEE THE API DATA