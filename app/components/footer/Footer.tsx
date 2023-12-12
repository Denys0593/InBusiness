import Link from "next/link";
import "./footer.scss";

export default function Footer({ logo }: any) {
  const up = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer>
        <div className="header">
          <Link href="/" className="header__image">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <div className="header__middleLeft">
              <span>Contacts:</span>
              <br />
              admin@in-business.com
              <br />
              +971 44  56 0771
            </div>
          </div>
          <div>
            <div className="header__middleRight">
              <span>Address</span>
              <br />
              InBusiness Advisory DMCC
              <br /> Po Box 338425
              <br /> 3910, Platinum Tower, JLT, Dubai, UAE
            </div>
          </div>
          <div onClick={up} className="header__end">
            <img src="topbtn.png" alt="topbtn" />
          </div>
        </div>
        <Link className="linkedin" href="#">
          LinkedIn
        </Link>
        <div className="bottom">
          <div className="bottom__left">2022. InBusiness Advisory DMCC</div>
          <div className="bottom__right">
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
