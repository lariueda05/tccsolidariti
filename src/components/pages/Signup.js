import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { useState } from "react";
import styles from'./Company.module.css'
import Alert from '@mui/material/Alert';

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const { signup } = useAuth();

  const handleSignup = () => {
    if (!name |!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }
    
    const res = signup(email, senha);
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/Company");
  };
  return (
    <div className={styles.field1}>
     <h1>Cadastre seus dados</h1>
     <label>Preencha com seus dados básicos para salvar seu endereço depois, caso queira</label>
     <form>
     <input
          type="text"
          placeholder="Digite seu Nome Completo"
          value={name}
          onChange={(e) => [setName(e.target.value)]}/>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}/>
         <input type="password"
         placeholder="Digite sua Senha"
         value={senha}
         onChange={(e) => [setSenha(e.target.value)]}/>

        <label>{error}</label>
        <button className={styles.form_step} onClick={handleSignup}>Cadastrar</button> 
        <br></br>
        <label>
          Já tem uma conta?
            <Link to="/Company">&nbsp;Entre</Link>
        </label>
        </form>
        </div>
  );
};

export default Signup;