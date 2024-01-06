import { useNavigate } from 'react-router-dom';
import wave from '../../assets/wave.png'
import { BottomWave, Box, Button, Main, TopWave } from "./styles";


function Home() {
  const navigate = useNavigate()

    return (
     <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }}/>
       <Box>
         <Button onClick={() => navigate("/login")}>Login</Button>
         <Button onClick={() => navigate("/cadastro")}>Cadastro</Button>
       </Box>
       <BottomWave style={{ backgroundImage: `url(${wave})` }}/>
     </Main>
    );
  }
  
  export default Home;