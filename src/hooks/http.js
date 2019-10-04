import {useState, useEffect} from 'react'

const [isLoading, setIsLoading] = useState(false)
const [fetchData, setFetchedData] = useState(null)

export const useHttp = (url, dependencies) => {
	useEffect(()=>{
		setIsLoading(true)
		fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then(data => {
            setIsLoading(false)
            setFetchedData(data);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false)
        });

	},dependencies)
    
        return [isLoading,fetchData]
}