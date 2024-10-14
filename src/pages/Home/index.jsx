import { Button, 
        Container, 
        Title, 
        TopBackground,
        Form, 
        ContainerInput, 
        Input,
        InputLabel
 } from "./styles"

 import UsersImage from '../../assets/users.png'

function Home() {
  

  return (
    
      <Container>
       <TopBackground>
           <img src={UsersImage} alt='imagem-usuarios'/>

       </TopBackground>

       <Form>

      <Title>Cadastro Usuarios</Title>

        <ContainerInput>

       
          
          <div>
          <InputLabel>
          Nome<span>*</span>
          </InputLabel>
          <Input type='name' placeholder='Nome do Usuario'/>
          </div>

          <div>
          <InputLabel>
          Idade<span>*</span>
          </InputLabel>
          <Input type='number' placeholder='Idade do Usuario'/>
          </div>

             
        </ContainerInput>



          <div style={{ width: '100%'}}>
          <InputLabel>
          E-mail<span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail'/>
          </div>

       

        <Button>Cadastro</Button>

      </Form>

      </Container>
     
  )
}

export default Home
