import bisondocx from '../assets/projects_imgs/bisondocx.png'
import wordcounter from '../assets/projects_imgs/wordcounter.png'
import dayofweek from '../assets/projects_imgs/dayofweek.png'
import DevelopedApp from './AppD';

const Apps = () => {
    return (
        <>  
            <DevelopedApp key={'bisondocx'} url={bisondocx} title='Bisondocx' tags={['Typescript', 'React']}/>
            <DevelopedApp key={'wordcounter'} url={wordcounter} title='Word Counter' tags={['Typescript', 'React', 'ExpressJS']}/>
            <DevelopedApp key={'dayofweek'} url={dayofweek} title='Day of week' tags={['Typescript', 'React', 'ExpressJS']}/>
        </>
    )
}

export default Apps