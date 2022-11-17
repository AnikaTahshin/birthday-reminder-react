import React from 'react'


export default function List({ people, setPeople }) {
    
    return (
        <>
            {people.map((person, index) => {
                const { id, name, age, img } = person;
                return (

                    <div key={id}>
                        <img src={img} alt={name} style={{ width: '100px', height: '100px' }} />
                        <h4>{person.name}</h4>
                        <p>{person.age} years</p>
                        <hr />
                    </div>
                )
               
            })}
        </>)
}

