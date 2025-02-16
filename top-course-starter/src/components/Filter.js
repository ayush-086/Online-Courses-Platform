import React from "react";


const Filter = (({filterData,category})=>{
    
    
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            <div> {filterData.map( filter => {
                return <button className=
                {`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === filter.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `} 
            key = {filter.id}>{filter.title} </button>
            })}
            </div>
        </div>
    )
});

export default Filter;