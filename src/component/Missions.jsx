import { useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import Mission from "./Mission";

export default function Missions({ MISSIONS }){
    const missionData = MISSIONS;
    const [filteredMissions, setFilteredMissions] = new useState(missionData);
    const missionCount =  (MISSIONS.length === 0 ? 'Showing 0 Missions' : `Showing ${filteredMissions.length} Missions`);
    const defaultStartYear = 2006;
    const defaultEndYear = 2017;
    const [dataFromChild, setDataFromChild] = useState({ Keywords:'', LaunchPad: '', MinYear: defaultStartYear, MaxYear: defaultEndYear });

    

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
        filterData();
    };

    const filterData = async() => {
        // Access input value
        const keyword_query = dataFromChild.Keywords;
        const launchpad_query = dataFromChild.LaunchPad;
        const minYear_query = dataFromChild.MinYear === 'Any' ? defaultStartYear : dataFromChild.MinYear;
        const maxYear_query = dataFromChild.MaxYear === 'Any' ? defaultEndYear : dataFromChild.MaxYear;

        var updatedList = [...missionData];
        // Include all elements which includes the search query
        updatedList = await updatedList.filter((mission) => {
            const givenLaunchDate = new Date(mission.launch_date_local);
            return ((mission.rocket.rocket_name.toLowerCase().indexOf(keyword_query.toLowerCase()) !== -1 
                    || mission.payloads[0].payload_id.toLowerCase().indexOf(keyword_query.toLowerCase()) !== -1
                    || mission.flight_number.toString().indexOf(keyword_query) !== -1)
                    && mission.launch_site.site_name.toString().indexOf(launchpad_query) !== -1 
                    && (givenLaunchDate.getFullYear() >= minYear_query && givenLaunchDate.getFullYear() <= (maxYear_query)))
        });
        // Trigger render with updated values
        setFilteredMissions(updatedList);
    }

    // useEffect(() => {
    //     setFilteredMissions(MISSIONS);
    // },[]);

    
    
    return(
        <div>
            <FilterMenu onDataFromChild={handleDataFromChild} />
            <p className="flex justify-center content-center h-auto mt-4 mb-2 text-xs text-slate-400">
                {missionCount}
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

