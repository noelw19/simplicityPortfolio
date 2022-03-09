import React from 'react';
// import styles from './card.module.css';
import './index.css'


export class ProjCard extends React.Component {
    constructor({name, tech, desc, url, image}) {
        super();
        this.name = name;
        this.tech = tech.join(', ');
        this.desc = desc;
        this.url = url;
        this.img = image;
    }

    // componentDidMount() {
    //     let cardParent = document.querySelector('.onclickCard');
    //     cardParent.addEventListener('click', (e) => {
    //         console.log(e.target);
    //         window.open(this.url, '_blank');
    //     })
    // }

    render() {
        return (
            <div className='onclickCard cardParent' id='cardFather' onClick={() => {window.open(this.url, '_blank');}}>
                <h3>{this.name}</h3>
                <img src={this.img} alt='project view'></img>
                <div className='flex'><p style={{color: 'var(--orange)', paddingRight: '5px'}}>Tech: </p><p className='cardValText'> {this.tech}</p></div>
                <div className='flex'><p className='cardValText'> {this.desc}</p></div>
            </div>
        )
    }
}

// export const ProjCard = ({name, tech, desc, url, image}) => {
//     let techStack = tech.join(', ');

//     useEffect(() => {
//         let cardParent = document.querySelector('.onclickCard');
//         cardParent.addEventListener('click', (e) => {
//             console.log(e.target)
//             window.open(url, '_blank');
//         })
//     }, [url]);
    
    
//     return (
//         <div className='onclickCard cardParent' id='cardFather'>
//             <h3>{name}</h3>
//             <img src={image} alt='project view'></img>
//             <div className='flex'><p style={{color: 'var(--orange)', paddingRight: '5px'}}>Tech: </p><p className='cardValText'> {techStack}</p></div>
//             <div className='flex'><p className='cardValText'> {desc}</p></div>
            
//         </div>
//     )
// }