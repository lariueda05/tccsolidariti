import styles from './DoarReceber.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useEffect, useState } from 'react';
import api from '../services/api'
import ClientMapa from '../mapas/clientMapa'
import {Link} from 'react-router-dom';

 function Receber(){

  const[cadastros, setCadastros] = useState([])
  const[busca, setBusca] = useState('')
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParam] = useState(["local", "name", "cidade"]);
  const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
      api.get("cadastros").then(({data}) => {
        setCadastros(data)
     }).then((res) => res.json())
     .then(
      (result) => {
          setIsLoaded(true);
          setCadastros(result);
      },
      (error) => {
          setIsLoaded(true);
          setError(error);
      }
  );
    console.log(cadastros)
    }, [])

    const data = Object.values(cadastros);

    function search(cadastros) {
      return cadastros.filter((cadastro) => {
          if (cadastro.cidade == filterParam) {
              return searchParam.some((newCadastro => {
                  return (
                      cadastro[newCadastro]
                          .toString()
                          .toLowerCase()
                          .indexOf(busca.toLowerCase()) > -1
                      );
                }));
          } else if (filterParam == "All") {
              return searchParam.some((newCadastro) => {
                  return (
                      cadastro[newCadastro]
                          .toString()
                          .toLowerCase()
                          .indexOf(busca.toLowerCase()) > -1
                  );
              });
          }
      });
  }

   return(
      <div>
        <h1>Lista de Contribuintes</h1>
        <label>Digite sua região e pesquise</label>
        <input type="text" placeholder='Pesquise...' className={styles.search}
        value={busca}
        onChange={e =>  setBusca(e.target.value)}>
        </input>
        <ClientMapa/>
      {search(data).map(cadastro => (
        <div>
          <Container>
            <Row>
         <Card> 
          <Card.Header key={cadastro._id}>
            <li style={{listStyleType: "none"}}>Nome: {cadastro.name}</li>
            <li>Email: {cadastro.email}</li>
            <li>Cidade: {cadastro.cidade}</li>
            <li>Endereço: {cadastro.local}</li>
            </Card.Header>
            <Card.Footer>
            </Card.Footer>
            <br></br>
            </Card>
            <br></br>
            </Row>
            <br></br>
            </Container>
            </div>
        ))}
        </div>
    )
  }
export default Receber