import styles from'./Company.module.css'
import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import useAuth from '../../context/useAuth'

const Company = () =>{
    const { signin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
          }
      
          const res = signin(email, senha);
      
          if (res) {
            setError(res);
            return;
          }
      
          navigate("/Formulario");
    }
    return (
        <div className={styles.field1}>
            <h1>Quem Somos</h1>
            <p>Somos uma instituição de doações de produtos online, temos o intuito de ajudar sem fins lucrativos.
            O nosso site foi feito para você doar ou receber sem contato pessoal com o doador/receptor.
                A nossa ideia é que você selecione somente o que quiser/precisa, para que não haja desperdício.</p>
            <br>
            </br>
            <p>Para ser um de nossos parceiros (pessoas que serão receptores e doadores dos produtos), preencha o formulário abaixo e aguarde nosso contato.</p>
        <br></br>
        <h3> Formuário para ser um de nossos ajudantes </h3>
        <form>
            <label> <span>Lembrando que seu endereço será compartilhado com todos que quieserem doar ou receber</span>
            <span>você só poderá se tornar colaborador se concordar com os termos e ter controle sobre os produtos doados e quem irá receeber</span></label>
        <br></br>
        <label>Já sou contribuinte/Já me cadastrei</label>
        <input placeholder="Email" type="email" name='email'
        onChange={(e) => [setEmail(e.target.value)]}
        />  
        <input type="password" placeholder="Senha" name='senha'
        onChange={(e) =>  [setSenha(e.target.value)]}/>
        <label>{error}</label>
        <button className={styles.form_step} onClick={handleLogin}>Entrar</button>
        <label>Não tem uma conta? <Link to="/Signup">&nbsp;Registre-se</Link></label>
        <br></br>
        </form>
    </div>
    )
}

export default Company