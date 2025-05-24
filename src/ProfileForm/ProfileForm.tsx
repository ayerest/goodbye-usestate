import React, { useState } from 'react';
import z from 'zod';
import '../App.css';

const Profile = z.object({
  name: z.string(),
  favoriteColor: z.string(),
  favoriteMovie: z.string(),
})

const ProfileForm1 = () => {
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteMovie, setFavoriteMovie] = useState('');

  const handleSubmitForm = () => {
    const formBody = {
      name,
      favoriteColor,
      favoriteMovie
    }
    const data = Profile.parse(formBody);
    console.log(data, "Form body for request")
  }
  return (
    <div >
    <form action={handleSubmitForm} className="formContainer">
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
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Profile.parse(Object.fromEntries(formData));
    console.log("Form data here: ", data)
  }
  return (
    <div >
    <form onSubmit={handleSubmitForm} className="formContainer">
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

// export default ProfileForm1;
export default ProfileForm2;