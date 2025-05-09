import React from "react";

const Map = () => {
  return (
    <iframe
      className="md:w-10/12 w-11/12 mx-auto mt-16"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220739.41125821273!2d71.27910148130059!3d30.178471363159616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b316f90441e05%3A0x1301e798c5f8c9e3!2sMultan%20City%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714841837049!5m2!1sen!2s"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Multan City Map"
    ></iframe>
  );
};

export default Map;
