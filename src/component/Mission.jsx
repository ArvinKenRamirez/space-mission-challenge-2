import { useState } from 'react';
import DEFAULT_SVG_PATCH from '../designs/default-mission-patch.svg';



export default function Mission({ flightDetails }){
    const [is_res404,set_is_res404] = useState(false); 
    const missionPatchSrcImg = flightDetails.links.mission_patch;
    const isFailed = (flightDetails.launch_success === false || flightDetails.land_success === false) ? true : false;
    const flightNum = `#${flightDetails.flight_number}`;
    const flightNum_txt = `Flight Number`;

    const handleImgLoadErr = () => {
        set_is_res404(true);
    };

    const subTitle = (
        <p>Launched on [DATE] at [TIME] from {flightDetails.launch_site.site_name}</p>
    );

    const missionPatchImg = ( is_res404 ? (
        <img src={DEFAULT_SVG_PATCH} alt={missionPatchSrcImg} className="w-full h-full" />
    ) :
        <img src={missionPatchSrcImg} alt={missionPatchSrcImg} onError={handleImgLoadErr} referrerPolicy="no-referrer" className="w-full h-full" />
    )

    let rocketNameAndPayload = <h2>{flightDetails.rocket.rocket_name} - {flightDetails.payloads[0].payload_id}</h2>;
    if(isFailed){
        rocketNameAndPayload = (
            <h2>{flightDetails.rocket.rocket_name} - {flightDetails.payloads[0].payload_id} - <span className="text-red-600">Failed Mission</span> </h2>
        );
    };



    return(
        <div className="flex justify-center content-center h-auto">
            <div className="box-border h-20 w-20">
                {missionPatchImg}
            </div>
            <div className="box-border w-4/6 ml-4 mr-7">
                {rocketNameAndPayload}
                {subTitle}
                
            </div>
            <div className="text-center box-border h-20 w-20 ">
                <h3>{flightNum}</h3>
                <p className="text-zinc-400	text-xs">{flightNum_txt}</p>
            </div>
        </div>
    );
}