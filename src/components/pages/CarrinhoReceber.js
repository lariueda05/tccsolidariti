import { useEffect, useState } from "react"
import styles from './Company.module.css'
import Axios from "axios"

function CarrinhoReceber(){
    const [listClient, setListClient] = useState();
    const [values, setvalues] = useState();
    
    const handleChangeValues = (value) => {
        setvalues((prevvalue) => ({
            ...prevvalue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/cadastro", {
            name: values.name,
            email: values.email,
            local: values.local,
            cidade: values.cidade,
        }).then(() => {
            Axios.post("http://localhost:3001/searching", {
                name: values.name,
                email: values.email,
                local: values.local,
                cidade: values.cidade,
            }).then((response) => {
                setListClient([
                    ...listClient,
                    {
                        id: response.data[0].id,
                        name: values.name,
                        email: values.email,
                        local: values.local,
                        cidade: values.cidade,
                    }
                ])
            })
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/cadastros").then((response)=>{
            setListClient(response.data);
        })
    }, [])

    return(
        <div className={styles.field1}>
        <form>
        <h3>Adicionar seu endereço</h3>
        <label>Adicione aqui seu endereço para que fique publica suas opções</label>
        <br></br>
        <input type="text" 
        name="name"
        placeholder="Nome Completo" 
        onChange={handleChangeValues}></input>
        
        <input type="text" name="email"
        placeholder="Seu Email (Opcional)" 
        onChange={handleChangeValues}/> 
        
        <input type="text" name="cidade"
        placeholder="Sua cidade" 
        onChange={handleChangeValues}/> 

       <input type="text" name="local"
        placeholder="Seu endereço, CEP ou CNPJ" 
        onChange={handleChangeValues}/> 
        
       <button className={styles.form_step} onClick={() => handleClickButton() }>Enviar</button>
        </form>
        </div>
    )
}

export default CarrinhoReceber