import { useEffect, useState } from "react";
import Container from "./Container";
import "./card.scss";

export default function Card() {
  const [cont, setCont] = useState("Structuring");

  const choose = (e: any) => {
    e.preventDefault();

    const arr = document.querySelectorAll(".card__item");

    if (e.target.matches("li")) {
      arr.forEach((item) => {
        item.classList.remove("active");

        e.target.classList.add("active");
      });
      setCont(e.target.textContent);
    }
  };

  return (
    <div className="card">
      <ul onClick={(e) => choose(e)} className="card__list">
        <li className="card__item active">Structuring</li>
        <li className="card__item">Corporate Services</li>
        <li className="card__item">Bank Account Opening</li>
        <li className="card__item">Immigration Service</li>
        <li className="card__item">Accounting & Bookkeeping</li>
        <li className="card__item">Compliance</li>
        <li className="card__item">Travels & Events Management</li>
      </ul>
      <Container title={cont} />
    </div>
  );
}
