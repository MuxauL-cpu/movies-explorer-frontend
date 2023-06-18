import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Profile.css';

function Profile() {
  return(
    <div className='profile'>
      <h2 className='profile__title'>Привет, Михаил!</h2>
      <Form
        buttonText='Редактировать'
        type='profile'
      >
        <Input
          labelText='Имя'
          type='name'
          name='name'
          mod='profile'
        />
        <Input 
          labelText='E-mail'
          type='email'
          name='email'
          mod='profile'
        />
      </Form>
      <NavLink to='/signin' className='profile__signout'>Выйти из аккаунта</NavLink>
    </div>
  );
}

export default Profile;