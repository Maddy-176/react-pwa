import {useState, useEffect} from 'react';
import PropTypes from 'prop-types'


const baseUrl= "https://jsonplaceholder.typicode.com/"

function useFetch(param) {

    const [data, setData]= useState([]);
    const [isOffline, setIsOffline]= useState(false);

    useEffect(() => {
        fetch(`${baseUrl}${param}`).then((res) => {
            res.json().then((result) => {
                setData(result)
                localStorage.setItem(`${param}`, JSON.stringify(result))
            })
        }).catch(err => {
            setIsOffline(true)
            console.log("is online",err)
            let cachedData = localStorage.getItem(param);
            setData(JSON.parse(cachedData))
        })
    }, [param])
    
      return {data:[...data],isOffline: isOffline};
    }

    useFetch.propTypes={
        param:PropTypes.string
    }

export default useFetch