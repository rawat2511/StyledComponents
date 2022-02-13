import { Logo, MainWrapper, Link } from './App.styled';



function App() {

  return (
    <div>

      <MainWrapper>
        <Logo src="https://play-lh.googleusercontent.com/p6kS3dCcILt9Z4vRMxHXZTbRecqnZTx5ysBVp6Qe3fDofokRLuWjRxF8J0TkMTG2gKo" />
        <Link num={1} href="https://www.google.com" target="_blank" >Home</Link>
        <Link num={2} href="https://www.google.com" target="_blank" >About</Link>
      </MainWrapper>

    </div>
  );
}

export default App;
