import React from "react";

const Component = ({ data }) => {
  const { title, name, date, point1, point2, point3 } = data;
  return (
    <section className='info'>
      <h2>{title}</h2>
      <h3>{name}</h3>
      <span>{date}</span>
      <p>{point1}</p>
      <p>{point2}</p>
      <p>{point3}</p>
      <button className='btn'>More Info</button>
    </section>
  );
};

export default Component;
