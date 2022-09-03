import { useState } from 'react'

const Form = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    //const [gender, setGender] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
          alert("Name can't be empty!")
        }
        if(!message) {
          alert("Please enter a message!")
        }

        onAdd({ name, email, number, message })

        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
    }


  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-components form-name'>
        <label>Name</label>
        <input 
            type='text' 
            placeholder='Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-components form-email'>
        <label>Email</label>
        <input 
            type='email' 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-components form-contact'>
        <label>Contact Number</label>
        <input 
            type='tel' 
            placeholder='Contact Number' 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      {/* <div className='form-components'>
        <label>Gender</label>
        <input type='radio' />
        <label>Male</label><br></br>
        <input type='radio' />
        <label>Female</label><br></br>
        <input type='radio' />
        <label>Others</label><br></br>
      </div> */}
      <div className='form-components form-message'>
        <label id='message-label'>Message</label>
        <textarea 
            placeholder='Message' 
            rows='5' 
            cols='25'
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
        </textarea>
      </div>
      <button className='form-btn'>Submit</button>
    </form>
  )
}

export default Form
