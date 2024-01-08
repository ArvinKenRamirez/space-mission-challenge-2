import { useState } from 'react';
import DEFAULT_SVG_PATCH from '../designs/default-mission-patch.svg';
import MissionLinks from './MissionLinks';



export default function Mission({ flightDetails }){
    const [is_res404,set_is_res404] = useState(false); 
    const missionPatchSrcImg = flightDetails.links.mission_patch;
    const isFailed = (flightDetails.launch_success === false || flightDetails.land_success === false) ? true : false;
    const flightNum = `#${flightDetails.flight_number}`;
    const flightNum_txt = `Flight Number`;
    const givenLaunchDate = new Date(flightDetails.launch_date_local);
    const givenYear = givenLaunchDate.getFullYear();
    const givenDate = givenLaunchDate.getDate();
    const givenTime = givenLaunchDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });

    const numToMonth = (num) => {
        switch(num) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'No Month';
        };
    };

    const givenMonth = numToMonth(givenLaunchDate.getMonth());
    const subTitle = (
        <p>Launched on <strong>{givenMonth} {givenDate}, {givenYear}</strong> at <strong>{givenTime}</strong> from <strong>{flightDetails.launch_site.site_name}</strong></p>
    );

    const handleImgLoadErr = () => {
        set_is_res404(true);
    };

    const missionPatchImg = ( is_res404 ? (
        <img src={DEFAULT_SVG_PATCH} alt={missionPatchSrcImg} className="w-full h-full" />
    ) :
        <img src={missionPatchSrcImg} alt={missionPatchSrcImg} onError={handleImgLoadErr} referrerPolicy="no-referrer" className="w-full h-full" />
    )

    // const missionLinks = {
    //     campaign: flightDetails.links.reddit_campaign,
    //     launch: flightDetails.links.reddit_launch,
    //     recovery: flightDetails.links.reddit_recovery,
    //     media: flightDetails.links.reddit_media,
    //     presskit: flightDetails.links.presskit,
    //     article: flightDetails.links.article_link,
    //     video: flightDetails.links.video_link,
    // }
    // const missionLinksView = <MissionLinks linksFromMission={missionLinks}></MissionLinks>;

    let rocketNameAndPayload = <h2>{flightDetails.rocket.rocket_name} - {flightDetails.payloads[0].payload_id}</h2>;
    if(isFailed){
        rocketNameAndPayload = (
            <h2>{flightDetails.rocket.rocket_name} - {flightDetails.payloads[0].payload_id} - <span className="text-red-600">Failed Mission</span> </h2>
        );
    };



    return(
        <div className="flex justify-center content-center h-auto mb-3">
            <div className="box-border h-20 w-20 max-mobile:h-14 max-mobile:w-14 max-mobile:ml-1">
                {missionPatchImg}
            </div>
            <div className="box-border w-4/6 ml-4 mr-7 max-mobile:text-xs max-mobile:mr-2 max-mobile:ml-3">
                {rocketNameAndPayload}
                <div className="text-xs text-stone-400 mb-0.5">{subTitle}</div>
                <MissionLinks linksFromMission={flightDetails.links}></MissionLinks>
            </div>
            <div className="text-center box-border h-20 w-20 ">
                <h3>{flightNum}</h3>
                <p className="text-zinc-400	text-xs">{flightNum_txt}</p>
            </div>
        </div>
    );
}