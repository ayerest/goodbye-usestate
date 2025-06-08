import React, { useState } from 'react';
import z from 'zod';
import '../App.css';
import { useForm } from '@tanstack/react-form';

const Profile = z.object({
  name: z.string(),
  favoriteColor: z.string(),
  favoriteMovie: z.string(),
})

const ProfileForm1 = () => {
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteMovie, setFavoriteMovie] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formBody = {
      name,
      favoriteColor,
      favoriteMovie
    }
    const data = Profile.parse(formBody);
    console.log(data, "Form body for request")
  }
  return (
    <div>
    <form onSubmit={handleSubmitForm} className="formContainer" >
      <label className="label">
        Name
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <label  className="label">
        Favorite color
        <input type="text" onChange={(e) => setFavoriteColor(e.target.value)} value={favoriteColor} />
      </label>
      <label  className="label">
        Favorite movie
        <input type="text" onChange={(e) => setFavoriteMovie(e.target.value)} value={favoriteMovie} />
      </label>
      <button className="btn" type="submit">Submit profile</button>
    </form>
    </div>
  )
}

const ProfileForm2 = () => {
  const [profile, setProfile] = useState({
    name: '',
    favoriteColor: '',
    favoriteMovie: ''
  });

  const handleChangeProfile = (field, value) => {
    setProfile((prevProfileState) => (
      {...prevProfileState, 
        [field]: value
      }
    ))
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formBody = {
      name: profile.name,
      favoriteColor: profile.favoriteColor,
      favoriteMovie: profile.favoriteMovie
    }
    const data = Profile.parse(formBody);
    console.log(data, "Form body for request")
  }
  return (
    <div>
    <form onSubmit={handleSubmitForm} className="formContainer" >
      <label className="label">
        Name
        <input type="text" onChange={(e) => handleChangeProfile("name", e.target.value)} value={profile.name} />
      </label>
      <label  className="label">
        Favorite color
        <input type="text" onChange={(e) => handleChangeProfile("favoriteColor", e.target.value)} value={profile.favoriteColor} />
      </label>
      <label  className="label">
        Favorite movie
        <input type="text" onChange={(e) => handleChangeProfile("favoriteMovie", e.target.value)} value={profile.favoriteMovie} />
      </label>
      <button className="btn" type="submit">Submit profile</button>
    </form>
    </div>
  )
}

const ProfileForm3 = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Profile.parse(Object.fromEntries(formData));
    console.log("Form data here: ", data)
  }
  return (
    <div className="formContainer">
    <form onSubmit={handleSubmitForm} className="form" >
      <label htmlFor="name" className="label">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor='favoriteColor'  className="label">
        Favorite color
        <input type="text" name="favoriteColor" id="favoriteColor"/>
      </label>
      <label htmlFor='favoriteMovie' className="label">
        Favorite movie
        <input type="text" name="favoriteMovie" id="favoriteMovie" />
      </label>
      <button className="btn" type="submit">Submit profile</button>
    </form>
    </div>
  )
}

const ProfileForm4 = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      favoriteColor: '',
      favoriteMovie: '',
    },
    onSubmit: async ({ value }) => {
      console.log("Form data here: ", value)
    },
  })

  const handleSubmitForm = (e) => {
    e.preventDefault();
    form.handleSubmit();
  }

  return (
    <form onSubmit={handleSubmitForm} className="form" >
      <form.Field
        name="name"
        children={(field) => {
          return (
            <label htmlFor={field.name} className="label">
            Name
              <input type="text" name={field.name} id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </label>
          )
        }}
      />
      <form.Field
        name="favoriteColor"
        children={(field) => {
          return (
            <label htmlFor={field.name} className="label">
            Favorite color
              <input type="text" name={field.name} id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </label>
          )
        }}
      />
      <form.Field
        name="favoriteMovie"
        children={(field) => {
          return (
            <label htmlFor={field.name} className="label">
            Favorite movie
              <input type="text" name={field.name} id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </label>
          )
        }}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit}>
            {isSubmitting ? '...' : 'Submit Profile'}
          </button>
        )}
      />
    </form>
  )

}

export default ProfileForm1;
// export default ProfileForm2;
// export default ProfileForm3;
// export default ProfileForm4;