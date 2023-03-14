import styled from 'styled-components'

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 60px;
  background-color: crimson;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px 0 10px;
  }
  .header-container {
  }
  img {
    width: 45px;
    position: relative;
    left: 40px;
  }
  .container .cart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container .cart .cart-icon {
    font-size: 25px;
  }
  .second {
    text-align: center;
    background-color: white;
    margin: 0;
    /* height: 30px; */
    h1 {
      margin: 0;
      font-size: 23px;
    }
  }
`
