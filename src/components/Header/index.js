import arrowLogo from "../statics/arrow-logo.png"
import "./styles.css";

function Header() {
  return (
    <header>
        <nav class="header-nav">
          <h1>Talent G</h1>
          <img src={arrowLogo}/>
          <a href="#">Mi bootcamp</a>
          <a href="#">Mi Perfil</a>
        </nav>
    </header>
  )
}

export default Header;