import { useEffect, useState } from "react";

import styles from './ReposList.module.css'


const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 1500);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ol className={styles.list}>
                    {/*repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} 
                            </div>
                            <a target="_blank" className={styles.itemLink} href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )
}

export default ReposList;