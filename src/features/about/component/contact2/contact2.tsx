import { SyntheticEvent, useState } from "react";
import { ContactStructure } from "../../models/contact";

export function Contact2() {
  const initialUserData: ContactStructure = {
    username: "",
    email: "",
    category: "",
    hasLetter: false,
    gender: "",
  } as ContactStructure;

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLInputElement;
    const type = element.getAttribute("type");

    // Desestructuramos el estado previo.
    // Le indicamos que se actualice el valor con ".value" de la propiedad ".name"
    // "element.name" hace referencia al atributo "name" de cada <input>
    // Así se actualizan siempre los datos del formulario:
    setUserData({
      ...userData,
      [element.name]: type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <h2>Formulario controlado</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">User email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <fieldset onChange={handleChange}>
            <legend>Dinos tu género (si te parece)</legend>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </fieldset>
        </div>

        <div>
          <select
            name="category"
            value={userData.category}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="01-st">Standard</option>
            <option value="02-gd">Gold</option>
            <option value="03-pm">Premium</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="hasLetter"
            id="hasLetter"
            checked={userData.hasLetter}
            onChange={handleChange}
          />
          <label htmlFor="hasLetter">Quiero la newsletter</label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
