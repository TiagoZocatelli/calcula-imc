import { useState } from "react";
import styles from './Form.module.css';

const Form = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    const [alturaFinal, setAlturaFinal] = useState('');
    const [pesoFinal, setPesoFinal] = useState('');

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaEmMetros = parseFloat(altura);
            const pesoEmKg = parseFloat(peso);
            const imcCalculado = pesoEmKg / (alturaEmMetros * alturaEmMetros);
            const imcArredondado = imcCalculado.toFixed(2);
            setImc(imcArredondado);

            if (imcCalculado < 18.5) {
                setClassificacao('Abaixo do peso');
            } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
                setClassificacao('Peso normal (ou saudável)');
            } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
                setClassificacao('Sobrepeso');
            } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
                setClassificacao('Obesidade Grau 1');
            } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
                setClassificacao('Obesidade Grau 2');
            } else if (imcCalculado >= 40) {
                setClassificacao('Obesidade Grau 3 (Obesidade Mórbida)');
            }

            setAlturaFinal(altura);
            setPesoFinal(peso);

            setAltura('');
            setPeso('');
        } else {
            alert("Por favor, insira valores válidos para altura e peso.");
        }
    };

    return (
        <div className="container">
            <div className={styles.form}>
                <h1 className={styles.title} >Calcula IMC</h1>
                <input
                    type="number"
                    step="0.01"
                    placeholder="Digite sua Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Digite seu Peso em kg"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <button onClick={calcularIMC}>Calcular IMC</button>
            </div>
            {imc && (
                <div className={styles.resultado}>
                    <h2>Altura: {alturaFinal} metros</h2>
                    <h2>Peso: {pesoFinal} kg</h2>
                    <h2>Seu IMC é: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </div>
    );
};

export default Form;
