import { StyledHeader } from './style'
import { BsFillCartPlusFill } from 'react-icons/bs'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <section className="header-container">
          <div>...</div>
          {/* {aside} */}
        </section>
        <img className="img" src={logo} alt="" />
        <div className="cart">
          <BsFillCartPlusFill className="cart-icon" />
          <p>CARRINHO</p>
        </div>
      </div>
      <div className="second">
        <h1>Whatsapp</h1>
      </div>
    </StyledHeader>
  )
}

export default Header
