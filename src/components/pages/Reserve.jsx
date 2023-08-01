import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import { useState, useEffect } from 'react'

export default function Reserve(){
    // the state and function for storage and change the input value
    const [info, setInfo] = useState({
      date: '',
      time: '17:00',
      guests: '1',
      occasion: 'Birthday'
    })

    const handleChange = (e)=>{
      const {name, value} = e.target
      setInfo((prevInfo) => ({ ...prevInfo, [name]: value }))
    }

    const handleSubmit = ()=>{
        alert(`Date:${info.date}\nTime:${info.time}\nGuests:${info.guests}\nOccasion${info.occasion}`)
    }

    // change the available times
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00'])
    const updatedTimes = (prevTimes)=>{
        setAvailableTimes([...prevTimes, '19:00'])
    }

    // set the api
    useEffect(() => {
    import('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
      .then((module) => {
        // 在這裡可以使用 api.js 中的功能
        module.fetchData();
        // ...其他程式碼
      })
      .catch((error) => {
        console.error('Failed to load api.js:', error);
      });
    }, [])

    return(
        <>
            <Header/>
            <Form onChange={handleChange} onClick={handleSubmit} availableTimes={availableTimes}/>
            <Footer/>
        </>
    )
}