import React from "react";

const Card = ({ data, onClick }) => {
  return (
    <div
      key={data.className}
      className={` ${data.className}`}
      onClick={onClick}
    >
      <section className="obverse">
        <p className="number">{data.number}</p>
        <p className="mark">{data.class}</p>
      </section>
      <section className="behind">behind</section>
    </div>
  );
};

export default Card;