import styles from './proj.module.css';
import { ProjCard } from '../../components/Card/card';
import cocktailRecipe from '../../images/projects/cocktailRecipe.png'
import calculatorProj from '../../images/projects/calc.png';
import oldPortfolio from '../../images/projects/oldPortfolio.png';
import sudokuSolver from '../../images/projects/sudoku1.png';
import PSR from '../../images/projects/PSR.png';
import alo from '../../images/projects/a-lo_Home.png';

export const Projects = () => {

    let aloDesc = 'A full-stack project I built to solve an issue of my own and to push my learning further. This project includes authentication, form validation and verification, responsivity, a dynamic react route, image compression on the frontend for easier post and get of the image, nodemailer on the backend for emails that contain certain logs and emails from the website via email us page, conversion of base64 to image file and back on the server, has routes for updating data and deleting data from db, image and document directories and authentication validation on backend so users can only user certain routes if they are logged in. '
    let oldPortDesc = 'An older portfolio i built using react, hooks and a few css keyframes for animation, although by the time I was nearing the end of the project I realised i wanted a simple portfolio, something clean and minimalistic instead of a portfolio cluttered with all things i wanted to show I could do.'
    let modernCalc = 'A calculator that takes sentences and extracts the embedded numbers on either side of an operator (i.e: +, -, *, /) using regex and shows the result in the right pane, also with a copy button that copies the sentence and the result in a prettier format on to the clipboard. Made for note taking to better remember the whole equation.';
    let cocktailFinder = 'A cocktail recipe finder, that usilizes the cocktail DB api, and a simple website to display the data and a searchbar that searches for ingredients and spirits.'
    let sudokuSolverDesc = 'A sudoku solver I built by checking each value within the 2D array, grabbing the next null value and all of the possibilities are tried for that place and sequencially pushed to an array, if a null value is found that possibility is discarded and the first possibility with no null values is found it is then returned and rendered in the UI. '
    let PSRDesc = 'Built a paper, scissors, rock game to work on my typescript, used enumerators to hold the gameResults and the choice of weapon for the round, used the useState hook to hold the score state and after at 10 points a winner is decided.'

    return (
        <div className='routedPageContainer flexCenter'>
        <div className={styles.clickTextContainer}>
                <p className={styles.clickText}>Click the project to view the site.</p>
            </div>
            <div className={styles.contentContainer}>
                <ProjCard name='A Loved One - A-LO' tech={['Javascript', 'Css', 'ReactJs', 'NodeJS', 'Nodemailer', 'ExpressJs', 'Auth0', 'Express-jwt', 'Mongoose', 'Axios', 'Dotenv', 'Node-base64-image', 'Compressorjs', 'Dompurify', 'Qrcode']} desc={aloDesc} url='https://a-lo.netlify.app/' image={alo}></ProjCard>
                {/* <ProjCard name='Paper Scissors Rock' tech={['TypeScript', 'Css', 'ReactJs']} desc={PSRDesc} url='https://coruscating-panda-84a6b0.netlify.app/' image={PSR}></ProjCard> */}
                <ProjCard name='Sudoku Solver' tech={['Js', 'Css', 'Css Keyframes']} desc={sudokuSolverDesc} url='https://lambent-granita-d2c356.netlify.app/' image={sudokuSolver}></ProjCard>
                {/* <ProjCard name='Modern Calculator' tech={['Js', 'React', 'Regex']} desc={modernCalc} url='https://dreamy-yalow-484b54.netlify.app/' image={calculatorProj}></ProjCard> */}
                {/* <ProjCard name='Cocktail Recipe Finder' tech={['Js', 'React', 'fetch']} desc={cocktailFinder} url='https://suspicious-northcutt-b99321.netlify.app/' image={cocktailRecipe}></ProjCard> */}
                <ProjCard name='Previous Portfolio' tech={['Js', 'React', 'Css Keyframes']} desc={oldPortDesc} url='https://hungry-benz-7536cf.netlify.app/' image={oldPortfolio}></ProjCard>
            </div>
        </div>
    )
}