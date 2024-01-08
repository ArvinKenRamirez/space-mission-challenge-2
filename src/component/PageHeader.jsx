import SPACE_PHOTO from '../designs/space-photo.jpeg';
import {ReactComponent as DownChevronSVG} from '../designs/down-chevron.svg';
import { HashLink } from 'react-router-hash-link';

export default function PageHeader(){
    const hearedMainText = 'Discover Space Missions';
    const headerBg = {
        background: `url(${SPACE_PHOTO})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% 50vh`,

    };

    return(
        <section className=" flex justify-center items-center relative w-full h-64" style={headerBg}>
            <h1 className=" text-white text-5xl  max-mobile:text-3xl max-tablet:text-4xl">{hearedMainText}</h1>            
            <HashLink smooth to="#pageBodySection" className="flex absolute self-end " > 
                <DownChevronSVG className="w-10 h-10 fill-white" />
            </HashLink>
        </section>
    );
}
