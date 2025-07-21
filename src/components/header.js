
function Header (){
    return (
        <div className="p-2 mt-1">
             <div className="flex  w-full h-[50px] text-xl text-gray-400 border-2 border-black rounded-[20px] shadow-grey-50">
            <label className="flex items-center m-2 text-black">Choose Topic:</label>
            <select className="m-2 text-black">
                <option>Head and Neck</option>
                <option>Upper Limb</option>
                <option>Lower Limb</option>
                <option>Upper Trunk</option>
                <option>Lower Trunk</option>
           </select>
            <label className="flex items-center m-2 text-black">Choose Mode:</label>
            <select className="m-2 text-black">
                <option>Systemic Approach</option>
                <option>Regional Approach</option>
                
           </select>
            <label className="flex items-center m-2 text-black">Choose Source:</label>
            
           <select className="m-2 text-black">
                <optgroup label="Text Book" >
                
                <option>Clinically Oriented Anatomy By Moore</option>
                <option>Snell's Clinically Oriented Anatomy</option>
                <option>Grey's Anatomy</option>
           </optgroup>
                     <optgroup label="Web Site" >
                
                <option>Ken Hub</option>
                <option>Clinical Anatomy</option>
                <option>Anatomy</option>
           </optgroup>
                
           </select>
            
            
            
             </div>
    
        </div>
       );
}
export default Header;
