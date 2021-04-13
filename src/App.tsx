import React from 'react';
import styled from 'styled-components';
import {Language} from '@styled-icons/fa-solid/Language';

const Box = styled.div`
    flex: 1;
`

const Welcome = styled.div`
  position: absolute;
  flex: 1;
  margin-left: 38%;
  margin-top: 25%;
  font-family: Roboto;
  
  font-size: 40px;
`

const NameBox = styled.input`
  
  border-radius: 30px;
  border-style: solid;
  margin-left: 39%;
  margin-top: 35%;
  
  font-size: 25px;
  
  padding-top: 10px;
  
  width: 300px;
  height: 50px;
`

const LangChange = styled(Language)`
  width: 100px;
  height: 100px;
  margin-left: 80%;
  margin-top: 30px;
`


function App() {
  return (
      <Box>
          <LangChange/>
          <Welcome>
              이름을 입력해주세요.
          </Welcome>
          <NameBox/>
      </Box>
  );
}

export default App;
