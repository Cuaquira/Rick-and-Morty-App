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
        const [page, setPage] = useState(1);
        const lastIndex =  page * 20
        const firstIndex = lastIndex - 20;
        const paginatedCharacter = location.residents?.slice(firstIndex, lastIndex);

        const LastPage = Math.ceil(location.residents?.length / 20)

        const numbers = []

        for (let i = 1; i <= LastPage; i++) {
            numbers.push(i)  
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
                    paginatedCharacter?.map((resident) => (
                        <ResidentInfo residentUrl={resident} key={resident} />
                    ))
                }
            </div>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev page</button>
            {
                numbers.map( number => (
                    <button onClick={() => setPage(number)}>{number}</button>
                ))
            }
            <button onClick={ () => setPage(page + 1)} disabled={ page === LastPage }>Next page</button>
        </div>
    );
};

export default Location;