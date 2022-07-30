import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/66280875?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Bianca Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio às 08:00' dateTime='2022-05-11 08:00:00' >Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Olá</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>Tempora, cumque? Tempore tempora vitae cupiditate asperiores modi consequatur quibusdam, facere eaque quisquam nemo voluptate, alias architecto, repudiandae sit incidunt ad ullam.</p>
                <p><a href="#">#HTML #Rocketseat</a></p>
            </div>
        </article>
    )
}