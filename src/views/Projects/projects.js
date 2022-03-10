import styles from './proj.module.css';
import { ProjCard } from '../../components/Card/card';
import cocktailRecipe from '../../images/projects/cocktailRecipe.png'
import calculatorProj from '../../images/projects/calc.png';
import aromatherapySite from '../../images/projects/aromatherapy.png';
import oldPortfolio from '../../images/projects/oldPortfolio.png'

export const Projects = () => {

    let oldPortDesc = 'An older portfolio i built using react, hooks and a few css keyframes for animation, although by the time I was nearing the end of the project I realised i wanted a simple portfolio, something clean and minimalistic instead of a portfolio cluttered with all things i wanted to show I could do.'
    let aromatherapy = 'An aromatherapy site that I built, with local json data. Data is not complete but the site is responsive and the search bar works for searching through the data available locally.'
    let modernCalc = 'A calculator that takes sentences and extracts the embedded numbers on either side of an operator (i.e: +, -, *, /) using regex and shows the result in the right pane, also with a copy button that copies the sentence and the result in a prettier format on to the clipboard. Made for note taking to better remember the whole equation.';
    let cocktailFinder = 'A cocktail recipe finder, that usilizes the cocktail DB api, and a simple website to display the data and a searchbar that searches for ingredients and spirits.'

    return (
        <div className='routedPageContainer flexCenter'>
            <h1>Project Board</h1>
            <p style={{color: 'lightGrey'}}>Click the project to view the site.</p>
            <div className={styles.contentContainer}>
                <ProjCard name='Cocktail Recipe Finder' tech={['Js', 'React', 'fetch']} desc={cocktailFinder} url='https://suspicious-northcutt-b99321.netlify.app/' image={cocktailRecipe}></ProjCard>
                <ProjCard name='Modern Calculator' tech={['Js', 'React', 'Regex']} desc={modernCalc} url='https://dreamy-yalow-484b54.netlify.app/' image={calculatorProj}></ProjCard>
                <ProjCard name='Herbal Therapy' tech={['Js', 'React', 'Css Keyframes', 'local data']} desc={aromatherapy} url='https://keen-poitras-6360a4.netlify.app/' image={aromatherapySite}></ProjCard>
                <ProjCard name='Previous Portfolio' tech={['Js', 'React', 'Css Keyframes']} desc={oldPortDesc} url='https://hungry-benz-7536cf.netlify.app/' image={oldPortfolio}></ProjCard>

            </div>
        </div>
    )
}