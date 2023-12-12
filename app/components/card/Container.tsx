import "./card.scss";

export default function Container({ title }: any) {
  const images = [
    {
      name: "Structuring",
      img: "./corporate.png",
    },
    {
      name: "Corporate Services",
      img: "./corpserv.png",
    },
    {
      name: "Bank Account Opening",
      img: "./bankacc.png",
    },
    {
      name: "Immigration Service",
      img: "./immserv.png",
    },
    {
      name: "Accounting & Bookkeeping",
      img: "./book.png",
    },
    {
      name: "Compliance",
      img: "./comp.png",
    },
    {
      name: "Travels & Events Management",
      img: "./travel.png",
    },
  ];

  const cont = images.map((item) => {
    if (item.name === title) {
      return (
        <div
          style={{
            background: `url(${item.img}) center center/cover no-repeat`,
          }}
          key={Math.random()}
          className="container"
        >
          <h2 className="container__title">{item.name}</h2>
          <hr />
          <img
            className="container__image"
            src="./arrowsandball.png"
            alt="arrowsandball"
          />
          <div className="container__footer">
            <div className="container__text">
              Our Company formation and corporate services team possesses
              expertise in analyzing the appropriate form.
            </div>
            <button className="container__btn">
              <div className="container__left">Learn more</div>
              <img
                src="arrowRightWhite.svg"
                alt="right"
                className="container__right"
              />
            </button>
          </div>
        </div>
      );
    }
  });

  return cont;
}
