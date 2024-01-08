import MissionLinkButton from "./MissionLinkButton";


export default function MissionLinks(props){
    // const camaign = props.linksFromMission.campaign.toString();
    console.log('linksFromMission==>', props.linksFromMission.article_link);

    const checkLinkValue = (linkVar) => {
        const checkedLink = linkVar === null || linkVar === undefined ? true : false;
        return checkedLink;
    }

    //     campaign: flightDetails.links.reddit_campaign,
    const reddit_campaign = checkLinkValue(props.linksFromMission.reddit_campaign) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.reddit_campaign}>Reddit Campaign</MissionLinkButton>
    const reddit_launch = checkLinkValue(props.linksFromMission.reddit_launch) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.reddit_launch}>Reddit Launch</MissionLinkButton>
    const reddit_recovery = checkLinkValue(props.linksFromMission.reddit_recovery) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.reddit_recovery}>Reddit Recovery</MissionLinkButton>
    const reddit_media = checkLinkValue(props.linksFromMission.reddit_media) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.reddit_media}>Reddit Media</MissionLinkButton>
    const presskit = checkLinkValue(props.linksFromMission.presskit) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.presskit}>Press Kit</MissionLinkButton>
    const article_link = checkLinkValue(props.linksFromMission.article_link) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.article_link}>Article</MissionLinkButton>
    const video_link = checkLinkValue(props.linksFromMission.video_link) ? '' : <MissionLinkButton linkSrc={props.linksFromMission.video_link}>Watch Video</MissionLinkButton>

    return(
        <div className="flex">
            {reddit_campaign}
            {reddit_launch}
            {reddit_recovery}
            {reddit_media}
            {presskit}
            {article_link}
            {video_link}
            {/* <MissionLinkButton linkSrc={props.linksFromMission.campaign}>Reddit Campaign</MissionLinkButton>
            <MissionLinkButton>Reddit Launch</MissionLinkButton>
            <MissionLinkButton>Reddit Recovery</MissionLinkButton>
            <MissionLinkButton>Reddit Media</MissionLinkButton>
            <MissionLinkButton>Press Kit</MissionLinkButton>
            <MissionLinkButton>Article</MissionLinkButton>
            <MissionLinkButton>Watch Video</MissionLinkButton> */}
        </div>
    );
}
