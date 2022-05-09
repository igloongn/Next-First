import axios from "axios"
import Link from "next/link"

export const getStaticProps = async () => {

  let url = 'https://jsonplaceholder.typicode.com/users?_limit=4'
  let res = await axios.get(url)
  let data = await res.data

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {

  console.log(users);

  return (
    <div>
      <center><h2>This is the User Alone</h2></center>
      <br /><br />
      <br /><br />
      {users.map(user => {
        return (
          <div key={user.id}>
            <Link href={'users/' + user.id}>
              <a>
                <h2>Name: {user.name}</h2>
              </a>
                {/* <h2>UserName: {user.username}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Number: {user.phone}</h2> */}
            </Link>
            <br /><br />
          </div>
        )
      })}
    </div>
  )
}

export default Users
