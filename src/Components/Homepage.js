import * as React from 'react'
import axios from 'axios'
import Card from './Card';

const HomePage = () => {
    const dummyData = 
        [{"flavor":"Sweet,Earthy,Citrus","id":1007,"medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue","name":"Juicy Jack","negative":"Dry Mouth,Paranoid","positive":"Euphoric,Happy,Creative,Energetic,Uplifted","type":"hybrid"},{"flavor":"Pungent,Pine,Earthy","id":1192,"medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue","name":"Master Jedi","negative":"Dizzy,Dry Mouth,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Sleepy","type":"indica"},{"flavor":"Earthy,Chemical,Pine","id":708,"medical":"Depression,Pain,Stress,Nausea,Headache,Fatigue","name":"Frank's Gift","negative":"Dizzy,Paranoid,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Giggly","type":"hybrid"},{"flavor":"Berry,Blue Cheese,Diesel","id":557,"medical":"Depression,Fatigue","name":"Dank Sinatra","negative":"","positive":"Relaxed,Euphoric,Happy,Sleepy,Focused","type":"hybrid"},{"flavor":"Berry,Blueberry,Sweet","id":769,"medical":"Depression,Insomnia,Pain,Stress,Headache,Muscle Spasms","name":"Godberry","negative":"Dizzy,Dry Mouth,Paranoid,Dry Eyes","positive":"Relaxed,Euphoric,Happy,Sleepy,Giggly","type":"indica"}]
    
    const [strains, setStrains] = React.useState(dummyData)

//   React.useEffect(() => {
//       axios.get('https://med-cabinet-project.herokuapp.com/medical/depression')
//       .then(response => {
//           setStrains(response.data);
//       })
//       .catch(error => {
//           console.error(error);
//       })
//   }, []);

  return (
    <div className="home-profile">
      <h1 className="h1-profile">Welcome to Med-Cabinet!</h1>
      <h2>User Profile</h2>
      <h3>Recommended Strains</h3>
      {strains.map(strain => {
          return (
              <Card strain={strain}/>
          )
      })}
      <p>*Add/remove*</p>
    </div>
  )
}

export default HomePage

