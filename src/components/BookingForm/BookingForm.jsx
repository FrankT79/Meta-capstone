import React from 'react'
import styles from './BookingForm.module.css'
import Select from 'react-select'

function BookingForm(props) {
 
  const options = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
    { value: 'engagement', label: 'Engagement' }
  ]
  

  const[date, setDate] = React.useState("");
  const[time, setTime] = React.useState("");
  const[guests, setGuests] = React.useState(2);
  const[occasion, setOccasion] = React.useState("");
  const[firstName, setFirstName] = React.useState("feri");
  const[lastName, setLastName] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[phone, setPhone] = React.useState("");
  const[comment, setComment] = React.useState("");

  console.log(firstName)

  return (
    <main>
      <div className={styles.container}>
      <h1>BOOKING</h1>
      <div className={styles.formContainer}>
      <form action="submit">
        <div>
        <label htmlFor="date" className={styles.blocky}>Date *</label>
        <input type="date" id='date' name='date' placeholder='date' value={date} onChange={setDate} />
        </div>
        <div>
            <label htmlFor="time" className={styles.blocky}>Time *</label>
            <Select options={props.resTime}  value={time} onChange={(e)=> setTime(e.target.value)}/>
        </div>
        <div className={styles.bob}>
          <label htmlFor="people" >People *</label>
          <h4>{guests}</h4>
         <input type="range" id={styles.people} name='people' min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          
        </div>
        <div>
          <label htmlFor="occasion" className={styles.blocky}>Occasion *</label>
          <Select options={options} value={occasion} onChange={setOccasion}/>
        </div>
        
        <div>
          <label htmlFor="firstName" className={styles.blocky}>First Name *</label>
          <input type="text" id='firstName' name='firstName' placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="lastName" className={styles.blocky}>Last Name *</label>
          <input type="text" id='lastName' name='lastName' placeholder='Last Name' value={lastName} onChange={setLastName}/>
        </div>
        <div>
          <label htmlFor="email" className={styles.blocky}>Email *</label>
          <input type="email" id='email' name='email' value={email} onChange={setEmail}/>
        </div>
        <div>
          <label htmlFor="phone" className={styles.blocky}>Phone *</label>
          <input type="phone" id='phone' name='phone' value={phone} onChange={setPhone}/>
        </div>
        <div>
          <label htmlFor="comments" className={styles.blocky}>Comments (optional)</label>
          <textarea id='comments' name='comments' rows={4} value={comment} onChange={setComment}/>
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