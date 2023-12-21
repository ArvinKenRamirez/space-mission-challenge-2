import { useState, useEffect } from "react";
import axios from "axios";
import Missions from "./Missions";


export default function PageBody(){

    // const [isClicked, set_isClicked] = useState(false);
    const [launchpads, setLaunchpads] = useState([]);
    const [launches, setLaunches] = useState([]);
    const [missions, setMissions] = useState([]);
    

    // Fetch launchpads
    const url_launchpads = 'http://localhost:8001/launchpads';
    const fetchLaunchpads = async () => {
        const res = await fetch(url_launchpads).catch((error) => {
            console.log(error)
        });
        const data = await res.json();

        return data;
    }

    // Fetch launches
    const url_launches = `http://localhost:8001/launches`;
    const fetchlaunches = async () => {
        const res = await axios.get(url_launches).catch(err => console.log(err));
        console.log('launches res==>', res.data);
        setLaunches(res.data);
        return res;
    }

    //getMissions
    const getMissions = async () => {
        //setLaunchpads
        const launchpadsFromServer = await fetchLaunchpads();
        setLaunchpads(launchpadsFromServer);

        //setLaunches
        const launchesFromServer = await fetchlaunches();
        console.log('launchesFromServer==>',launchesFromServer);
        // setLaunches(launchesFromServer);

        // console.log('launches==>', launches);

        //setMissions
        // const mappedLaunchpads = new Map(launchpads.map(launchpad => [launchpad.id, launchpad]));
        // console.log('mappedLaunchpads===> ',mappedLaunchpads);
    }

    useEffect(() => {
        getMissions();
    },[]);

    // let handleClick = () =>{
    //     set_isClicked(!isClicked);
    //     return isClicked;
    // }

    // let bodyContent = <p>No Missions Found</p>; 

    // if(isClicked){
    //     bodyContent = (
    //         <div>
    //             <h1>Inside myBoolean</h1>
    //         </div>
    //     );
    // };

    return(
        <section id="pageBodySection" className=" flex justify-center content-center h-auto bg-slate-200">
            <article className="  w-5/6 bg-white my-8  ">
                {launches ? (<Missions MISSIONS={launches} />) : <></>}
                {/* {bodyContent} */}
                {/* <button onClick={handleClick}>Hello tailwind css!</button> */}
            </article>
        </section>
        
    );
}
