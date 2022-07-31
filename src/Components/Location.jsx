import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import IMG from "../IMG/fondo.png"


const Location = () => {

    const [location, setLocation] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios
            .get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [])
    console.log(location);


    const SearchId = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${search}`)
            .then(res => setLocation(res.data))
    }


    return (
        <div className='c'>
            <figure >
                <img className='img-fondo' src={IMG} alt="fondo" />
            </figure>
            <h2 className='location_name'>{location.name}</h2>
            <section className='location_card'>
                
                <p className='card_date'><b>Type: </b> <br />{location.type}</p>
                <p className='card_date'><b>Dimension: <br /></b>{location.dimension}</p>
                <p className='card_date'><b>Population: <br /></b>{location.residents?.length}</p>
            </section>
            <div className='input'>
                <input
                    className='input_data'
                    type="text"
                    value={search}
                    onChange={ e => setSearch(e.target.value)}
                    placeholder="search id"
                    id='miid'
                />
                <br />
                <button className='btn' onClick={SearchId}>Search</button>
            </div>
            <div className='container_card'>
                {
                    location.residents?.map((resident) => (
                        <ResidentInfo residentUrl={resident} key={resident} />
                    ))
                }
            </div>
        </div>
    );
};

export default Location;