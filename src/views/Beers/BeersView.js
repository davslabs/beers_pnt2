import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Beer from '../../components/Beer/Beer';

const BEERS_URL = 'https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json';

const BeersView = (props) => {
    const [beers, setBeers] = useState([]);
    
    const getBeers = async () => {
        const response = await fetch(BEERS_URL);
        const data = await response.json();

        console.info(data);
        setBeers(data);
    }

    useEffect(() => {
        getBeers();
    }, []);

    return (
        <FlatList
            data={beers}
            renderItem={({item}) => 
                <Beer name={item.name} abv={item.abv} label={item.label} type={item.type} />
            }
        />
    )
};

export default BeersView;