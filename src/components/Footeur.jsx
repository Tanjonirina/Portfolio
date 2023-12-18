import React, { useState } from "react";

export default function Footeur() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value.trim() === "" ? `${name} est requis.` : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation supplémentaire, par exemple, vérification de l'email

    // Si tout est valide, soumettre le formulaire
    if (Object.values(formErrors).every((error) => error === "")) {
      // Effectuez ici votre logique d'envoi du formulaire
      console.log("Formulaire soumis avec succès:", formData);
    } else {
      console.log("Le formulaire contient des erreurs. Veuillez les corriger.");
    }
  };

  return (
    <>
      <br />
      <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div
          id="contact"
          className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        >
          <div className="pb-8 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">
              N'hésitez pas à me contacter pour discuter de projets
              passionnants. Je suis à votre disposition pour collaborer!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full sm:w-1/2"
            >
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-3 ${
                  formErrors.email && "border-red-500"
                }`}
                required
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
              <textarea
                name="message"
                rows="10"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-3 ${
                  formErrors.message && "border-red-500"
                }`}
                required
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500">{formErrors.message}</p>
              )}
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto rounded-md hover:scale-105 duration-300 mt-4"
              >
                Contacter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
