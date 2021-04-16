import React from 'react';

const Select = ({states}) => {
    return (
        <div>
            <form>
                <label for="state"> State :</label>
                <select name="state" id="state">
                    {states.map((state,index)=>(
                        <option value={index}>{state.name}</option>
                    ))}
                </select>
                <br></br>
                <label for="city"> City :</label>
                <select name="city" id="city">
                    {states.map((state,index)=>(
                        <option value={state[index].city.name}>{state[index].city.name}</option>
                    ))}
                </select>
                <br></br>
                <label for="landmark"> State :</label>
                <select name="landmark" id="landmark">
                    <option value="ranchi" >ranchi</option>
                </select>
                <br></br>
            </form>
        </div>
    );
};

export default Select;