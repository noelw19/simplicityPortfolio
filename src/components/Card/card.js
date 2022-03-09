import React, {useEffect} from 'react';
import styles from './card.module.css';


export const ProjCard = ({name, tech, desc, url, image}) => {
    let techStack = tech.join(', ');

    // useEffect(() => {
    // let cardParent = document.querySelector('#cardFather');
    // cardParent.addEventListener('click', (e) => {
    //     //     console.log(e.target)
    //         window.open(url, '_blank');
    //     })
    // }, []);
    // let cardParent = document.querySelector('#cardFather');
    // cardParent.addEventListener('click', (e) => {
    //     console.log(e.target)
    //     // window.open(url, '_blank');
    // })
    
    return (
        <div className={styles.cardParent} id='cardFather'>
            <h3>{name}</h3>
            <img src={image} alt='project view'></img>
            <div className={styles.flex}><p style={{color: 'var(--orange)', paddingRight: '5px'}}>Tech: </p><p className={styles.cardValText}> {techStack}</p></div>
            <div className={styles.flex}><p className={styles.cardValText}> {desc}</p></div>
            
        </div>
    )
}