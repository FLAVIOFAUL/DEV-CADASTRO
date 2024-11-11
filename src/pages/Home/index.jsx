
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from '../../services/api'

import {
  Container,
  Title,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles"


import Button from '../../components/Button'
import TopBackground from "../../components/TopBackground"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.currentcurrent.value,
      age: parseInt(inputAge.currentvalue),
      email: inputEmail.current.value

    })

  }

  return (

    <Container>
      <TopBackground />

      <Form>

        <Title>Cadastro Usuarios</Title>

        <ContainerInput>



          <div>
            <InputLabel>
              Nome<span>*</span>
            </InputLabel>
            <Input type='name' placeholder='Nome do Usuario' ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuario' ref={inputAge} />
          </div>


        </ContainerInput>



        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail' ref={inputEmail} />
        </div>



        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastro</Button>

      </Form>
      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuarios</Button>

    </Container>

  )
}

export default Home
