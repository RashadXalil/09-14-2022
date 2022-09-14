import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, SetAge] = useState(0)
  const [users, setUsers] = useState([])
  let index = 0
  return (
    <div className="App">
      <div className="wrapper">
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div className="form__item">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </div>
        <div className="form__item">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="age"
            onChange={(e) => {
              SetAge(e.target.value)
            }}
          />
        </div>
        <button
          onClick={() => {
            let user = {
              id: index,
              Username: firstName,
              Usersurname: lastName,
              Userage: age,
            }
            setUsers([...users, user])
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {users.map((user, key) => {
          return (
            <li
              onClick={(e) => {
                console.log(e.target.id)
              }}
              id={key}
              key={key}
            >
              {user.Username} {user.Usersurname} {user.Userage}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
