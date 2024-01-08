import { HashLink } from 'react-router-hash-link';

export default function PageFooter(){
    const copyrightText = <p className="text-xs text-slate-400">Copyright &copy; 2018 Space Savvy</p>;
    const backToTopText = 'Back to top';


    return(
        <footer className="flex justify-center content-center bg-slate-200">
            <div className="flex justify-between w-5/6 my-4">
                {copyrightText}
                <HashLink smooth to="#pageBodySection" className="text-xs text-slate-700 underline hover:text-slate-950" > 
                    {backToTopText}
                </HashLink>
            </div>
        </footer>
    );
}
