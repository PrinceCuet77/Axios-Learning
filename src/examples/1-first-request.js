import { useEffect } from 'react'

// Importing axios from 'axios' library
import axios from 'axios'

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

// Functional component
const FirstRequest = () => {
    // 'async' because it returns the promise
    const fetchData = async () => {
        // Because of promise, I must use try-catch for error handling
        try {
            const response = await axios(url) // Defaults GET request
            // const response = await axios.get(url) // Same as previous line
            // console.log(response)

            const data = response.data
            console.log(data)
        } catch (error) {
            console.log(error.response) // 'axios' returns error in response
        }
    }

    // Call that fetching function from 'useEffect'
    useEffect(() => {
        fetchData()
    }, [])

    return <h2 className='text-center'>first request</h2>
}

export default FirstRequest
