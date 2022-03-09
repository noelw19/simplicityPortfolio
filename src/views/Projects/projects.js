import styles from './proj.module.css';
import { ProjCard } from '../../components/Card/card';
import cocktailRecipe from '../../images/projects/cocktailRecipe.png'
import calculatorProj from '../../images/projects/calc.png';
import aromatherapySite from '../../images/projects/aromatherapy.png';
import oldPortfolio from '../../images/projects/oldPortfolio.png'

export const Projects = () => {

    let oldPortDesc = 'An older portfolio i built using react, hooks and a few css keyframes for animation, although by the time I was nearing the end of the project I realised i wanted a simple portfolio, something clean and minimalistic instead of a portfolio cluttered with all things i wanted to show I could do.'
    let aromatherapy = 'An aromatherapy site that i built with hopes of '


    return (
        <div className='routedPageContainer flexCenter'>
            <h1>Project Board</h1>
            <p>Click the project to view the site.</p>
            <div className={styles.contentContainer}>
                <ProjCard name='Cocktail Recipe Finder' tech={['Js', 'React', 'fetch']} url='https://suspicious-northcutt-b99321.netlify.app/' image={cocktailRecipe}></ProjCard>
                <ProjCard name='Modern Calculator' tech={['Js', 'React', 'Regex']} url='https://dreamy-yalow-484b54.netlify.app/' image={calculatorProj}></ProjCard>
                <ProjCard name='Herbal Therapy' tech={['Js', 'React']} desc={aromatherapy} url='https://keen-poitras-6360a4.netlify.app/' image={aromatherapySite}></ProjCard>
                <ProjCard name='Previous Portfolio' tech={['Js', 'React']} desc={oldPortDesc} url='https://hungry-benz-7536cf.netlify.app/' image={oldPortfolio}></ProjCard>

            </div>
        </div>
    )
}