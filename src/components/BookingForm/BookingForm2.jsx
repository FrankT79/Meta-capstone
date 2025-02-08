import React from 'react'
import styles from './BookingForm.module.css'
import Select from 'react-select'

function BookingForm() {
  const[guests, setGuests] = React.useState(2);
  const options = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
    { value: 'engagement', label: 'Engagement' }
  ]

  const resTime = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
  ]

  return (
    <main>
      <div className={styles.container}>
      <h1>BOOKING</h1>
      <div className={styles.formContainer}>
      <form action="submit">
        <div>
        <label htmlFor="date" className={styles.blocky}>Date *</label>
        <input type="date" id='date' name='date' placeholder='date' />
        </div>
        <div>
            <label htmlFor="time" className={styles.blocky}>Time *</label>
            <Select options={resTime} defaultValue={resTime[0]}/>
        </div>
        <div className={styles.bob}>
          <label htmlFor="people" >People *</label>
          <h4>{guests}</h4>
         <input type="range" id={styles.people} name='people' min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          
        </div>
        <div>
          <label htmlFor="occasion" className={styles.blocky}>Occasion *</label>
          <Select options={options} />
        </div>
        
        <div>
          <label htmlFor="firstName" className={styles.blocky}>First Name *</label>
          <input type="text" id='firstName' name='firstName' placeholder='First Name' />
        </div>
        <div>
          <label htmlFor="lastName" className={styles.blocky}>Last Name *</label>
          <input type="text" id='lastName' name='lastName' placeholder='Last Name' />
        </div>
        <div>
          <label htmlFor="email" className={styles.blocky}>Email *</label>
          <input type="email" id='email' name='email'/>
        </div>
        <div>
          <label htmlFor="phone" className={styles.blocky}>Phone *</label>
          <input type="phone" id='phone' name='phone'/>
        </div>
        <div>
          <label htmlFor="comments" className={styles.blocky}>Comments (optional)</label>
          <textarea id='comments' name='comments' rows={4} />
        </div>
        <button type='submit' id={styles.submitbtn}>Book Table</button>
      </form>
      <img src="./src/assets/restauranfood.jpg" alt="picture of restaurant food" width={300}/>
      </div>
      </div>
    </main>
    
  )
}

export default BookingForm