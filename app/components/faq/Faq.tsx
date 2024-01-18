import { useState } from "react";

export default function Faq({ number }: any) {
  const [open, setOpen] = useState<boolean>(false);

  const openfunc = (e: any) => {
    e.preventDefault();

    if (e.target.matches("img")) {
      setOpen(!open);
    }
  };

  return (
    <li className="related__item">
      <div className="related__left">{number}</div>
      <div className="related__right">
        <h3 className="related__right_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          faucibus quam?{" "}
        </h3>
        <div
          className={
            open ? "related__right_bottom_active" : "related__right_bottom"
          }
        >
          Aliquam sodales, tellus at consequat malesuada, neque dolor auctor
          sapien, eget vehicula quam diam at est. Donec quis dui quis magna
          dictum hendrerit. Suspendisse porttitor lacinia scelerisque. In
          ullamcorper convallis arcu, id rhoncus est sodales id. Maecenas
          ultrices neque in neque viverra, non lobortis velit vestibulum. Etiam
          auctor laoreet libero quis aliquet. Nulla lacinia augue et velit
          gravida, in tempor purus rutrum. To know more details see{" "}
          <span>Our Client Handbook.</span>
        </div>
      </div>
      <button className="related__right_imageUp">
        <img src="up.svg" alt="up" />
      </button>
      <button className="related__right_image" onClick={(e) => openfunc(e)}>
        {open ? (
          <img src="up.svg" alt="up" />
        ) : (
          <img src="down.svg" alt="down" />
        )}
      </button>
    </li>
  );
}
