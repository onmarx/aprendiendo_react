import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'


const users = [
  {
    userName: 'EmergenciasEc',
    name: 'Emergencias Ec',
    isFollowing: true
  },
  {
    userName: 'Anggy1313',
    name: 'Nina',
    isFollowing: false
  },
  {
    userName: 'barbienunezt',
    name: 'Barbie Nuñez',
    isFollowing: false
  }
];

export function App() {
  // pasarle una funcion como prop
  const format = (userName) => `@${userName}`
  return (
    <section className='App'>
      {
        users.map((user, index) => {
          const {userName, name, isFollowing} = user
          return(
            <TwitterFollowCard 
              key={index}
              formatUserName={format} 
              name={name}
              userName={userName}
              initialIsFollowing={isFollowing} 
            />
          )
        })
      }
    </section>
  );
}
