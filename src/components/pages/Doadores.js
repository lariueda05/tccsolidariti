import React, {useState } from "react";
import styles from '../project/Alimentos.module.css'
import FormDialog from '../dialog/dialogForm'
import {MdDelete} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'

function Doadores(props){
    const [open, setOpen] = React.useState(false);

    const HandleClickValues = () => {
        setOpen(true);
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen}/>
        <div className={styles.container} onClick={() => HandleClickValues()}>
            <h3 className={styles.title}>Pedido Realizado!</h3> 
            <ul className={styles.social_list}>
                <li><BiEdit/></li>
                <li><MdDelete/></li>
            </ul>
            <p className={styles.name}>Nome: {props.name}</p>
            <p className={styles.senha}>Senha: {props.senha}</p>
            <p>Local:</p>
            <p>Produtos:</p>
            <p>Quantidade:</p>
        </div>
        </>
    )
}
export default Doadores