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

    componentDidMount() {
        let cardParent = document.querySelectorAll('.onclickCard');
            

        cardParent.forEach(el => {
            el.classList.add('slide')
        })


        setTimeout(() => {
            cardParent.forEach(element => {
                element.classList.remove('slide');
            })
        }, 2000)
    }

    render() {
        return (
            <div className='onclickCard cardParent' id='cardFather' onClick={() => {window.open(this.url, '_blank');}}>
                <h3>{this.name}</h3>
                <img className='projImage' src={this.img} alt='project view'></img>
                <div className='flex'><p className='cardValText'> {this.tech}</p></div>
                <div className='flex'><p className='cardValText'> {this.desc}</p></div>
            </div>
        )
    }
}