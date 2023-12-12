import "./hamburger.scss";

export default function Xyu({ show, close }: any) {
  return (
    <div onClick={show} className="hamburger">
      <img src={close ? "close.png" : "hamburger.png"} alt="hamburger" />
    </div>
  );
}
