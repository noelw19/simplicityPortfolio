import styles from './proj.module.css';
import { ProjCard } from '../../components/Card/card';
import img from '../../views/Home/image.jpeg'

export const Projects = () => {
    return (
        <div className='routedPageContainer flexCenter'>
            <h1>Project Board</h1>
            <div className={styles.contentContainer}>
                <ProjCard name='Project Name' tech={['Js', 'React']} url='www.validUrl.com' image={img}></ProjCard>
                <ProjCard name='Project Name' tech={['Js', 'React']} url='www.validUrl.com' image={img}></ProjCard>
                <ProjCard name='Project Name' tech={['Js', 'React']} url='www.validUrl.com' image={img}></ProjCard>
                <ProjCard name='Project Name' tech={['Js', 'React']} url='www.validUrl.com' image={img}></ProjCard>

            </div>
        </div>
    )
}