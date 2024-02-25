import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

const users = [
    {
        userName:"0508_Delfii",
        name: "Delfi Rolon",
        isFollowing: true

    },
    {
        userName:"Gonzaveron24",
        name: "Gonzalo Veron",
        isFollowing: false
    },
    {
        userName:"Harry_Styles",
        name: "Harry Styles",
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) =>{
                    return(
                        <TwiterFollowCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing} 
                        />
                    )
                })
            }
        </section>
    )
}