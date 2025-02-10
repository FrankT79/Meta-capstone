import React from 'react'
import styles from './BookingForm.module.css'
import Select from 'react-select'

function BookingForm(props) {
 
  const options = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
    { value: 'engagement', label: 'Engagement' }
  ]

  const options2 = [
    'Other', 'Birthday','Anniversary', 'Engagement' 
  ]

  const optionfield = options2.map(option => <option key={option}>{option}</option>)
  const resTimes = props.availableTimes.map(item =><option key ={item}>{item}</option>)

 
  

  const[date, setDate] = React.useState("");
  const[time, setTime] = React.useState("");
  const[guests, setGuests] = React.useState(2);
  const[occasion, setOccasion] = React.useState(options2[0]);
  const[firstName, setFirstName] = React.useState("");
  const[lastName, setLastName] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[phone, setPhone] = React.useState("");
  const[comment, setComment] = React.useState("");

  const handleSubmit= (e)=>{
    e.preventDefault();
    
    props.submitData(date, time, guests, occasion, firstName, lastName, email, phone, comment);
  }
  
  const handleChange = (e)=>{
    setDate(e.target.value)
    props.dispatchOnDateChange(e.target.value)
  }

  const getIsFormValid = () => { 
    return (
      date&&
      firstName &&
      lastName&&
      email&&
      phone
      ); 
  }; 


  return (
    <main>
      
      <div className={styles.container}>
      <h1>BOOKING</h1>
      <div className={styles.formContainer}>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="date" className={styles.blocky}>Date *</label>
        <input type="date" id='date' name='date' placeholder='date' value={date} onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="time" className={styles.blocky}>Time *</label>
            <select id='time' value={time} onChange={(e)=>setTime(e.target.value)}  required>
          {resTimes}
          </select>
           
        </div>
        <div className={styles.bob}>
          <label htmlFor="people" >People *</label>
          <h4>{guests}</h4>
         <input type="range" id={styles.people} name='people' min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)}  required/>
          
        </div>
        <div>
          <label htmlFor="occasion" className={styles.blocky}>Occasion</label>
          <select id='occasion' value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
          {optionfield}
          </select>
        </div>
        
        <div>
          <label htmlFor="firstName" className={styles.blocky}  required>First Name *</label>
          <input type="text" id='firstName' name='firstName' placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}  required/>
        </div>
        <div>
          <label htmlFor="lastName" className={styles.blocky}  required>Last Name *</label>
          <input type="text" id='lastName' name='lastName' placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}  required/>
        </div>
        <div>
          <label htmlFor="email" className={styles.blocky}  required>Email *</label>
          <input type="email" id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
        </div>
        <div>
          <label htmlFor="phone" className={styles.blocky}  required>Phone *</label>
          <input type="phone" id='phone' name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)}  required/>
        </div>
        <div>
          <label htmlFor="comments" className={styles.blocky}>Comments (optional)</label>
          <textarea id='comments' name='comments' rows={4} value={comment} onChange={(e)=> setComment(e.target.value)}/>
        </div>
        <button type='submit' id={styles.submitbtn} aria-label='On Click' disabled={!getIsFormValid()}>Book Table</button>
      </form>
      <img src="./src/assets/restauranfood.jpg" alt="picture of restaurant food" width={300}/>
      </div>
      </div>
    </main>
    
  )
}

export default BookingForm