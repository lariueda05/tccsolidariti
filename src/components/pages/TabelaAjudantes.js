import { useNavigate } from 'react-router';
import useAuth from '../../context/useAuth'
import solidariti from '../../img/solidariti.png'
import CarrinhoDoar from './CarrinhoDoar';
import CarrinhoReceber from './CarrinhoReceber';
import React, { useState } from 'react';
import styles from './Company.module.css'

function Formulario(){
    const {signout} = useAuth();
    const navigate = useNavigate();

    return(
      <div>
      <h1>Olá, Contribuinte Solidariti!</h1>
      <p>Solicitações ou doações: Faça o controle de doações regularmente</p>
      <p>Esteja sempre atento na localização que você inserir, os doadores podem doar a qualquer horário do dia</p>
      <img src={solidariti} alt='solidariti'></img>
      <br/>
      <br/>
      <button className={styles.form_step} onClick={() => [signout(), navigate("/")]}>Sair</button>
      <br></br>
      <br/>

      <h3>Passo 1: (Cuidado com esse passo!)</h3>
      <CarrinhoReceber/>
      <br></br>
      <h3>Passo 2:</h3>
     <CarrinhoDoar/>
      </div>
    )
}

export default Formulario