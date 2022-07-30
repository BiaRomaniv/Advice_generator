import { PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"  />
            
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/66280875?v=4" />
                <strong>Bianca Romaniv</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20" />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
    
}