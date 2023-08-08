import React from "react";
import FormDialog from './dialogForm'
import {MdDelete} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
import styles from '../pages/Produtos.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

function Doadores(props){
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true)
    }

    return (
        <Row>
        <Col md={3}>
        <Card style={{ width: '25rem', margin:'auto' }}>
        <Card.Body>
        <FormDialog open={open} setOpen={setOpen} 
        id={props.id}
        produtos={props.produtos}
        doador={props.doador}
        categoria={props.categoria}
        quant={props.quant}
        data_={props.data_}
         listClient={props.listClient}
         setListClient={props.setListClient}/>
        <Card.Title>Pedido Realizado!</Card.Title>
            <ul className={styles.social_list}>
                <li><BiEdit onClick={() => {handleClick()}}/></li>
                <li><MdDelete onClick={() => {handleClick()}}/></li>
            </ul>
            <ListGroup.Item><p>Produto: {props.produtos}</p></ListGroup.Item>
            <ListGroup.Item><p>Email/Nome pessoal: {props.doador}</p></ListGroup.Item>
            <ListGroup.Item><p>Categoria: {props.categoria}</p> </ListGroup.Item>
            <ListGroup.Item><p>Quantidade: {props.quant}</p></ListGroup.Item>
            <ListGroup.Item><p>Data realizada: {props.data_}</p></ListGroup.Item>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    )
}
export default Doadores