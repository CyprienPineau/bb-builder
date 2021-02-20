import Link from "next/link"
import styles from '../styles/TeamBuilder.module.css'
import BB_TEAM_DATA from './../data/team'
import {useRouter} from 'next/router'

function HirePlayer({TeamData}){
    
    const playerList = TeamData.players.map((player,index)=>{
        return <div className={styles.hire} key={index}>
            <a href="">
                <img src="/icons/minus.svg" alt="remove"/>
            </a>
            <a href="">
                <img src="/icons/plus.svg" alt="add"/>
            </a>
            <p>{player.name}</p>
            <p>{player.cost}</p>
            <p>{player.max}</p>
        </div>
    })

    return <div className={styles.hireplayer}>
        {playerList}
    </div>
}


export default function TeamBuilder (){
    const router = useRouter()
    let TeamData = [];
    
    // Récupération des joueurs de l'equipe selectionne
    BB_TEAM_DATA.map((team, index)=>{
        if(team.name == router.query.team){
            TeamData = team;
        }
    })

    



    return <main className={styles.main}>

        <Link href="/TeamSelection">
            <a>Go back</a>
        </Link>

        <h2>{TeamData.name}</h2>

        <HirePlayer TeamData={TeamData}/>

    </main>
}