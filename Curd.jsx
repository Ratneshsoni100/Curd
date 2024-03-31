// import axios from 'axios'
import axios from 'axios'
import React from 'react'

function Curd() {
  let get = async () => {
    await axios.get('http://localhost:3000/users')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  let post = async () => {
    let added = { name: "Bhanu", age: 56, profession: "Singer" }
    await axios.post('http://localhost:3000/users', added)
      .then(response => console.log(response))
      .catch(err => console.log(err))

  }
  let put = async (para) => {
    let update = { name: "Shankar", age: 26, profession: "HorseRider" }
    await axios.put(`http://localhost:3000/user/${para}`, update)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  let patchData = async(para)=>{
    // alert(para)
    let newdta ={profession:"Doctor" }
    await axios.patch(`http://localhost:3000/users/${para}`,newdta)
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
}
let delData = async(para)=>{
  // alert(para)

  await axios.delete(`http://localhost:3000/users/${para}`)
  .then(response=>console.log(response.data))
  .catch(err=>console.log(err))
}

  return (
    <div>
      curd vv
      <button onClick={get}>getdata</button>
      <button onClick={post}>postdata</button>
      <button onClick={() => put('eb87')}>putdata</button>
      <button onClick={()=>patchData('4c4b')}>PatchDATA</button>
      <button onClick={()=>delData('eb87')}>deleteDATA</button>
    </div>
  )
}

export default Curd
