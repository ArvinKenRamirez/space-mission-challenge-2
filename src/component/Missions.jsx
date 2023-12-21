import { useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import Mission from "./Mission";

export default function Missions({ MISSIONS }){
    const missionCount =  (MISSIONS.length === 0 ? 'Showing 0 Missions' : `Showing ${MISSIONS.length} Missions`);
    const missionData = MISSIONS;
    
    const [dataFromChild, setDataFromChild] = useState({ Keywords:'', LaunchPad: '', MinYear: '', MaxYear: '' });

    // const finalMissions = new Map(MISSIONS.map(mission => [mission.flight_number, mission]));
    const [filteredMissions, setFilteredMissions] = new useState(missionData);

    const handleDataFromChild = (data) => {
        setDataFromChild(data);

        // Access input value
        const keyword_query = dataFromChild.Keywords;
        const launchpad_query = dataFromChild.LaunchPad;

        var updatedList = [...missionData];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((mission) => {
            return ((mission.rocket.rocket_name.toLowerCase().indexOf(keyword_query.toLowerCase()) !== -1 
                    || mission.payloads[0].payload_id.toLowerCase().indexOf(keyword_query.toLowerCase()) !== -1
                    || mission.flight_number.toString().indexOf(keyword_query) !== -1)
                    && mission.launch_site.site_name.toString().indexOf(launchpad_query) !== -1)
        });
        // Trigger render with updated values
        setFilteredMissions(updatedList);
        console.log('MISSIONS==>',missionData)
        console.log('filteredMissions===>',filteredMissions);
    };

    // useEffect(() => {
    //     setFilteredMissions(MISSIONS);
    // },[]);

    
    
    return(
        <div>
            <FilterMenu onDataFromChild={handleDataFromChild} />
            <p className="flex justify-center content-center h-auto mt-4 mb-2 text-xs text-slate-400">
                {missionCount} {/* kw-{dataFromChild.Keywords} lp-{dataFromChild.LaunchPad} mn-{dataFromChild.MinYear} mx-{dataFromChild.MaxYear}  */}
            </p>
            {filteredMissions.map( ( mission ) => (
                <Mission 
                    key={mission.flight_number}
                    flightDetails={mission}
                />
                )
            )}
        </div>
    );
    
}