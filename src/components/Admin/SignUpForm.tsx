import axios from "axios";
import {useState} from "react";

function SignUpForm() {
  const [openToast, setOpenToast] = useState(false)

  async function addBarber(e:any) {
    e.preventDefault()
    const form = e.target
    const fullName = form.firstName.value.trim() + " " + form.lastName.value.trim()
    const postData = {
      name: fullName,
      email: form.email.value
    }
    const data = await axios.post('http://localhost:3000/api/barbers/', postData)
    if (data.status === 200) {
      setOpenToast(true)
      if (document.getElementById('barber-form') !== null) {
        const barberForm = document.getElementById('barber-form') as HTMLFormElement;
        barberForm.reset()
      }
    }
  } 

  function CustomToast({duration, text}: {duration:number; text:string; }) {
    setTimeout(
      () => setOpenToast(false), 
      duration
    )
    if (!openToast) {
      return <></>
    } 
    return <div>{text}</div>
  }

  return(
    <div className="block p-6 rounded-lg shadow-lg bg-orange-200 max-w-md">
    <form id='barber-form' onSubmit={addBarber}>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-group mb-6">
          <input 
            type="text" 
            className="form-control"
            id="firstName"
            required
            placeholder="First name"/>
        </div>

        <div className="form-group mb-6">
          <input type="text" 
            className="form-control" 
            id="lastName"
            required
            placeholder="Last name"/>
        </div>
      </div>
      <div className="form-group mb-6">
        <input 
          type="email" 
          className="form-control" 
          id="email"
          required
          placeholder="Email address"/>
      </div>
      <input 
          type="submit" 
          value='Add Barber'
          className="
        w-full
        px-6
        py-2.5
        bg-orange-500
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"/>

        {CustomToast({duration: 2000, text: "Barber has been added!"})}
    </form>
  </div>
  )
}

export default SignUpForm;
