import styles from "./page.module.css";
import Form from "./components/Form";


export default function Home(){ 
return (
<main className={styles.main}>
<div className="App">
<div>
<p>
Lista de Compras
</p>
<br/>
<Form></Form>
</div>
</div>
</main>
);
}