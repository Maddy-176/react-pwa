import {useState, useEffect} from 'react';
import PropTypes from 'prop-types'


const baseUrl= "https://jsonplaceholder.typicode.com/"

function useFetch(param) {

    const [data, setData]= useState([]);

    useEffect(()=>{
        (async ()=>{
        const response= await fetch(`${baseUrl}${param}`)
        const resData= await response.json();
        setData(resData);
        })();
      },[param])
    
      return [data];
    }

    useFetch.propTypes={
        param:PropTypes.string
    }

export default useFetch