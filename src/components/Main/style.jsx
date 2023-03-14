import styled from 'styled-components'

export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .container .title {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    color: black;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 20px;
      background-color: red;
      width: 100%;
      margin: 0;
      height: 30px;
    }
  }
  img {
    width: 300px;
  }
  .container h2 {
    border-radius: 5px;
    font-size: 30px;
    color: black;
    background-color: white;
    width: 300px;
    text-align: center;
    margin: 0;
  }
`
