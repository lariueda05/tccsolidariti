import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "Posso acompanhar algum pedido?",
            content: `Não, quem acompanha o pedido ou doação de algum produto é o contribuinte. Você deverá fazer o pedido na hora de ir buscá-lo no ponto de coleta desejado.`,
        },
        {
            title: "Onde posso levar os produtos desejados para doar?",
            content:
                "Após escolher os produtos que serão doados, poderá buscar na aba Ajudantes uma lista de locais onde ficam armazenados os produtos, será preciso apenas escolher o local mais próximo e levar.",
        },
        {
            title: "Meu pedido virá embalado?",
            content: `Os alimentos irão na sua própria embalagem, as embalagens dos produtos como móves e roupas serão feitas de acordo com os doadores.`,
        },
        {
            title: "Os produtos são novos?",
            content: `Os produtos são seminovos, nós garantimos uma boa qualidade.`,
        },
        {
            title: "Os produtos que necessitam de montagem(móveis) acompanham manuais?",
            content: `Infelizmente muitos doadores descartam os manuais, caso precisem de ajuda entre em contato conosco.`,
        },
        {
            title: "Como sei que os produtos doados serão entregues?",
            content: `Saberá pelo ajudante, os produtos serão doados por ordem em que forem pedidos primeiro.`,
        },
        {
            title: "Ainda possui dúvidas?",
            content: `Entrem em contato com as nossas redes sociais.`,
        },
    ],
};
const styles = {
    bgColor: 'dark pink',
    rowTitleColor: "rgb(139,0,139)",
    rowContentColor: 'white',
    arrowColor: "purple",
    //rowTitleTextSize: 'medium',
    rowContentTextSize: "20px"
};

const config = {
    animate: true,
    //arrowIcon: "V",
    expandIcon: "+",
};

function Contact(){
    return (
        <div>
            <h1>Como podemos ajudá-lo?</h1>
            <b>Aqui estão algumas dúvidas comuns caso tenha algo a mais não esclarecido. Caso não sane a dúvida, entre em contato conosco.</b>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
export default Contact