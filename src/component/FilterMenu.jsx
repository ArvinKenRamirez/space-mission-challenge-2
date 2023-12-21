import React, { useState } from "react";
import Select from 'react-select';

const launchPadOptions = [
    { value: '', label: 'Any' },
    { value: 'Kwajalein Atoll', label: 'Kwajalein Atoll' },
    { value: 'Cape Canaveral Air Force Station Space Launch Complex 40', label: 'Cape Canaveral Air Force Station Space Launch Complex 40' },
    { value: 'Cape Canaveral Air Force Station Space Launch Complex 13', label: 'Cape Canaveral Air Force Station Space Launch Complex 13' },
    { value: 'CCAFS SLC 40', label: 'CCAFS SLC 40' },
    { value: 'Kennedy Space Center Launch Complex 39A', label: 'Kennedy Space Center Launch Complex 39A' },
    { value: 'KSC LC 39A', label: 'KSC LC 39A' },
    { value: 'VAFB SLC 4E', label: 'VAFB SLC 4E' },
    { value: 'Vandenberg Air Force Base Space Launch Complex 3W', label: 'Vandenberg Air Force Base Space Launch Complex 3W' },
    { value: 'Vandenberg Air Force Base Space Launch Complex 4E', label: 'Vandenberg Air Force Base Space Launch Complex 4E' },
    { value: 'Vandenberg Air Force Base Space Launch Complex 4W', label: 'Vandenberg Air Force Base Space Launch Complex 4W' },
    { value: 'SpaceX South Texas Launch Site', label: 'SpaceX South Texas Launch Site' },
];
const minYearOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const maxYearOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function FilterMenu({ onDataFromChild }){
    const [selectedLaunchPad, setSelectedLaunchPad] = useState('');
    const [selectedMinYear, setselectedMinYear] = useState('');
    const [selectedMaxYear, setselectedMaxYear] = useState('');
    const [data, setData] = useState({ Keywords:'', LaunchPad: '', MinYear: '', MaxYear: '' });

    const handleClick = async () => {
        onDataFromChild(data);
    };

    const handleChange = (event) => {
        
        if(event.target.name === 'Keywords'){
            setData({...data, Keywords: event.target.value});
        }
        
    }
    const handleOptionChange = (event, actionMeta) => {
        const propertyName = actionMeta.name;
        const selectedValue = event.value;
        
        if(propertyName === 'LaunchPad'){
            setData({...data, LaunchPad: selectedValue});
        }else
        if(propertyName === 'MinYear'){
            setData({...data, MinYear: selectedValue});
        }else
        if(propertyName === 'MaxYear'){
            setData({...data, MaxYear: selectedValue});
        }
    }


    return(
        <div className="flex justify-center content-center h-auto bg-slate-100 px-4 pb-4 gap-y-0">
                <div className="w-3/12">
                    <label htmlFor="Keywords" className="block text-xs font-medium leading-6 text-gray-900">Keywords</label>
                    <div className="mt-2 rounded-md shadow-sm">
                        <input type="text" value={data.Keywords} onChange={handleChange} name="Keywords" id="Keywords" className="block w-11/12 h-10 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-3" placeholder="eg Falcon" />
                    </div>
                </div>
                <div className="w-3/12">
                    <label htmlFor="LaunchPad" className="block text-xs font-medium leading-6 text-gray-900">Launch Pad</label>
                    <div className="mt-2 rounded-md shadow-sm">
                        {/* <input type="text" value={data.LaunchPad} onChange={handleChange} name="LaunchPad" id="LaunchPad" className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-3" placeholder="Any" /> */}
                    
                        <Select name="LaunchPad" id="LaunchPad" 
                            defaultValue={selectedLaunchPad} 
                            onChange={handleOptionChange} 
                            options={launchPadOptions}
                            placeholder="Any"
                            className="text-xs w-11/12"
                        />
                    </div>
                </div>
                <div className="w-2/12">
                    <label htmlFor="MinYear" className="block text-xs font-medium leading-6 text-gray-900">Min Year</label>
                    <div className="mt-2 rounded-md shadow-sm">
                        {/* <input type="text" value={data.MinYear} onChange={handleChange} name="MinYear" id="MinYear" className="block w-10/12 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-3" placeholder="Any" /> */}
                        <Select name="MinYear" id="MinYear" 
                            defaultValue={selectedMinYear} 
                            onChange={handleOptionChange} 
                            options={minYearOptions}
                            placeholder="Any"
                            className="text-xs w-11/12"
                        />
                    </div>
                </div>
                <div className="w-2/12">
                    <label htmlFor="MaxYear" className="block text-xs font-medium leading-6 text-gray-900">Max Year</label>
                    <div className="mt-2 rounded-md shadow-sm">
                        {/* <input type="text" value={data.MaxYear} onChange={handleChange} name="MaxYear" id="MaxYear" className="block w-10/12 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-3" placeholder="Any" /> */}
                        <Select name="MaxYear" id="MaxYear" 
                            defaultValue={selectedMaxYear} 
                            onChange={handleOptionChange}
                            options={maxYearOptions}
                            placeholder="Any"
                            className="text-xs w-11/12"
                        />
                    </div>
                </div>
                <div className="flex justify-end items-end w-2/12">
                    <button onClick={handleClick} className="text-xs text-white rounded-md shadow-sm border-0 w-10/12 h-10 bg-emerald-300 ">Apply</button>
                </div>
            </div>
    );
}