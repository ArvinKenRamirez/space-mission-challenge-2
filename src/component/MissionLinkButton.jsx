
export default function MissionLinkButton(props){
    const givenLink = props.linkSrc;

    return(
        <div className="flex justify-end items-start border rounded border-slate-400 hover:border-indigo-300 px-1 py-1 mr-1 ">
            <a href={givenLink} rel="noopener noreferrer" target="_blank" className="text-xs">{props.children}</a>
        </div>
    );
}
