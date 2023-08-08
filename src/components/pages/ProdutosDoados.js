import { useEffect, useState } from "react"
import styles from './Company.module.css'
import Doadores from '../ajudantes/Doadores'
import Axios from "axios"

function ProdutosDoados(){
    const [listClient, setListClient] = useState();
    const [values, setvalues] = useState();
    
    const handleChangeValues = (value) => {
        setvalues((prevvalue) => ({
            ...prevvalue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/produto", {
            name: values.name,
            category: values.category,
        }).then(() => {
            Axios.post("http://localhost:3001/procurar", {
                name: values.name,
                category: values.category,
            }).then((response) => {
                setListClient([
                    ...listClient,
                    {
                        id: response.data[0].id,
                        name: values.name,
                        category: values.category,
                    }
                ])
            })
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/produtos").then((response)=>{
            setListClient(response.data);
        })
    }, [])

    return(
        <div className={styles.field1}>
        <form>
        <h3>Adicionar Produtos</h3>
        <label>Adicione aqui o produto doado para ficar publico e disponivel</label>
        <br></br>
        <input type="text" 
        name="name"
        placeholder="Nome do Produto" 
        onChange={handleChangeValues}></input>
        
        <input type="text" name="category"
        placeholder="Categoria" 
        onChange={handleChangeValues}/> 
        
        
       <button className={styles.form_step} onClick={() => handleClickButton() }>Enviar</button>
        </form>
        {typeof listClient != "undefined" &&
        listClient.map((value) => (
       <Doadores key={value.id} 
            listClient={listClient} 
            setListClient={setListClient}
            id={value.idprodutos}
            name={value.name}
            category={value.category}
            />
        ))}
        </div>
    )
}

export default ProdutosDoados