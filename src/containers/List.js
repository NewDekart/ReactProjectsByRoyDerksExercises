import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card'

const List = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('../../../src/assets/data.json', { signal })
            .then(response => response.json())
            .then(data =>  {
                setLoading(false)
                setData(data)
            })
        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div className='row justify-content-center'>
            {loading && <div>Loading...</div>}
            {!loading && data.map(movie =>
                <div key={movie.id} className='col-sm-2'>
                    <Card movie={movie} />
                </div>
            )}
        </div>
    )
}

export default List
