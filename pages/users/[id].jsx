import axios from 'axios';



export const getStaticPaths = async () => {

  let url = 'https://jsonplaceholder.typicode.com/users?_limit=4'
  let res = await axios.get(url)
  let data = await res.data

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async context => {
  const id = context.params.id
  let url = 'https://jsonplaceholder.typicode.com/users/' + id
  const res = await axios.get(url)
  let data = await res.data

  return {
    props: { user: data }
  }

}




const UserDetails = ({ user }) => {
  return (
    <div>
      <center><h2>This is the User ID Part</h2></center>
      <center><h2>UserName: {user.username}</h2></center>
      <center><h2>Name: {user.name}</h2></center>
    </div>
  )
}

export default UserDetails




