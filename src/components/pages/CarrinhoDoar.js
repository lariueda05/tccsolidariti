import { useEffect, useState } from "react"
import styles from './Company.module.css'
import Axios from "axios"
import Doadores from '../ajudantes/Doadores'

function Carrinho(){
    const [listClient, setListClient] = useState();
    const [values, setvalues] = useState();
    console.log(listClient);
    
    const handleChangeValues = (value) => {
        setvalues((prevvalue) => ({
            ...prevvalue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            produtos: values.produtos,
            doador: values.doador,
            categoria: values.categoria,
            quant: values.quant,
            data_: values.data_,
        }).then(() => {
            Axios.post("http://localhost:3001/search", {
              produtos: values.produtos,
              doador: values.doador,
              categoria: values.categoria,
              quant: values.quant,
              data_: values.data_,
            }).then((response) => {
                setListClient([
                    ...listClient,
                    {
                        id: response.data[0].id,
                        produtos: values.produtos,
                        doador: values.doador,
                        categoria: values.categoria,
                        quant: values.quant,
                       data_: values.data_,
                    }
                ])
            })
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/pedido").then((response)=>{
            setListClient(response.data);
        })
    }, [])

    return(
        <div className={styles.field1}>
        <div>
        <h3>Controle de doações</h3>
        <label>Digite aqui o nome da pessoa, se foi doação ou solicitação e qual foi o produto</label>
        <label>Disponível apenas para você</label>
        <br></br>
        <input type="text" 
        name="produtos"
        placeholder="Nome do Produto" 
        onChange={handleChangeValues}></input>
        
        <input type="text" name="doador"
        placeholder="Email ou informação sobre quem doou" 
        onChange={handleChangeValues}/> 

       <input type="text" name="categoria"
        placeholder="Categoria (Alimento, Higiene, etc)" 
        onChange={handleChangeValues}/> 

        <input type="number" name="quant" placeholder="Quantidade de produtos" 
        onChange={handleChangeValues}></input>

        <input type="date" name="data_" placeholder="Data da doação" 
        onChange={handleChangeValues}></input>
        
       <button className={styles.form_step} onClick={() => handleClickButton() }>Enviar</button>
        </div>

        {listClient?.map((val) => (
        <Doadores
          listClient={listClient}
          setListClient={setListClient}
          key={val.id}
          id={val.id}
          produtos={val.produtos}
          doador={val.doador}
          categoria={val.categoria}
          quant={val.quant}
          data_={val.data_}
        />
      ))}

        </div>
    )
}

export default Carrinho