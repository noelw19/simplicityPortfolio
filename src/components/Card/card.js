import styles from './card.module.css';

export const ProjCard = ({name, tech, desc, url, image}) => {
    let techStack = tech.join(', ');
    
    return (
        <div className={styles.cardParent}>
            <h3>{name}</h3>
            <img src={image} alt='project view'></img>
            <div className={styles.flex}><p style={{color: 'var(--orange)', paddingRight: '5px'}}>Tech: </p><p className={styles.cardValText}> {techStack}</p></div>
            <div className={styles.flex}><p style={{color: 'var(--orange)', paddingRight: '5px'}}>About: </p><p className={styles.cardValText}> {desc}</p></div>
            <div className={styles.flex}><p style={{color: 'var(--orange)', paddingRight: '5px'}}>URL: </p><p className={styles.cardValText}> {url}</p></div>
        </div>
    )
}