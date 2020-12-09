import Form from '../components/Form'

const NewUser = () => {
  const userForm = {
    first_name: '',
    last_name: '',
    emailId: '',
    ph_number:'',
    feedback:'',
    
  }

  return <Form  userForm={userForm} />
}

export default NewUser
