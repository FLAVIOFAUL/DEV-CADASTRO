import api from "../../services/api"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import Trash from '../../assets/trash.svg'
import {
    Container,
    Title,
    ContainerUsers,
    TrashIcon,
    CardUsers,
    AvatarUser
} from "./styles"


function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {


            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])

    return (
        <Container>
            <TopBackground />

            <Title>Lista de Usuarios</Title>


            <ContainerUsers>

                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={'https://avatar.iran.liara.run/public?username=${user.id}'} />
                        <div >
                            <h3>user.name</h3>
                            <p>user.age</p>
                            <p>user.email</p>

                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' />
                    </CardUsers>
                ))}
            </ContainerUsers>


            <Button type="button">Voltar</Button>
        </Container>

    )
}


export default ListUsers