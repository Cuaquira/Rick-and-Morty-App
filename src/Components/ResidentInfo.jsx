import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ( {residentUrl}) => {
        const [residents, setResidents] = useState({})

        useEffect( () =>{ 
            axios
            .get(residentUrl)
            .then( res => setResidents(res.data))
        }, [])
        console.log(residents)


    return (
        <div className='Card'>
            <section className='card_info'>
            <h2 className='title_info'>{residents.name}</h2>
            <img className='img' src={residents.image} alt="" />
                <p><b>Status: </b>{residents.status}</p>
                <p><b>Origin: </b>{residents.origin?.name}</p>
                <p><b>Episode: </b>{residents.episode?.length}</p>
                <p><b>Specie: </b>{residents.species}</p>
            </section>
        </div>
    );
};

export default ResidentInfo;