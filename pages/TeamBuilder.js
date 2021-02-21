import Link from "next/link"
import styles from '../styles/TeamBuilder.module.css'
import {useRouter} from 'next/router'
import { useEffect, useRef } from "react"


function HirePlayer({players = []}){

    useEffect(() => {
        console.log('players changed');
    }, [players])

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        console.log('players changed 2');
    }, [players]);

    let playerList = players.map((player,index)=>{
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

export default function TeamBuilder ({fetchTeam}){
    const router = useRouter()
    let TeamData = [];
    
    // Récupération des joueurs de l'equipe selectionne
    fetchTeam.map((team)=>{
        if(team.name == router.query.team){
            TeamData = team;
            console.log(TeamData)
        }
    })

    return <main className={styles.main}>

        <Link href="/TeamSelection">
            <a>Go back</a>
        </Link>

        <h2>{TeamData.name}</h2>

        <HirePlayer TeamData={TeamData.players}/>

    </main>
}

export async function getStaticProps (){
    const fetchTeam = await fetch("https://cyprienpineau.github.io/data-bb-builder/teams.json")
    .then(r=>r.json())
    return {
        props:{
            fetchTeam
        }
    }
}