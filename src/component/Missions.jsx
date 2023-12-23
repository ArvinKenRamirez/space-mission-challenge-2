import { useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import Mission from "./Mission";

export default function Missions({ MISSIONS }){
    const missionData = MISSIONS;
    // const finalMissions = new Map(MISSIONS.map(mission => [mission.flight_number, mission]));
    const [filteredMissions, setFilteredMissions] = new useState(missionData);
    const missionCount =  (MISSIONS.length === 0 ? 'Showing 0 Missions' : `Showing ${filteredMissions.length} Missions`);
    
    const [dataFromChild, setDataFromChild] = useState({ Keywords:'', LaunchPad: '', MinYear: '', MaxYear: '' });

    

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

// EXPERIENCE
// Arvin has been consistently meeting the expectations set for him. His attention to details are admirable, taking notes of what's being discussed. By this, he is ensuring that he will be able to cover all scenarios of the requirement which truly reflects on his finished product. He is able to deliver and can work with minimal support needed.


// Arvin is a great asset for DCPDC ‘s Internal Project that he was assigned in, he is one of the main developer who also handles the code repository and deployment in their projects. He can work independently and has good technical Salesforce expertise, particularly with relation to APEX and LWC.


// Arvin is a Salesforce Certified Administrator and has strong experience in handling declarative and programmatic development in the Salesforce platform using various Apex Classes, Triggers, Test Classes, Visualforce pages, Aura, Lightning Web Components, and Flows to implement complex business requirements  from combined onshore/offshore previous projects and trainings.