import Link from "next/link"
import styles from '../styles/TeamSelection.module.css'
import BB_TEAM_DATA from './../data/team'


export default function TeamSelection (){

    const teamList = BB_TEAM_DATA.map((team, index)=>{
        return <Link href={{pathname:'/TeamBuilder', query:{team:team.name}}} key={index}>
            <a>
                <img src={team.img} alt={team.name + " team logo"}/>

                <div>
                    {team.name}
                </div>
            </a>
        </Link>
    })

    return <main className={styles.main}>

        <Link href="/">
            <a>Go back</a>
        </Link>

        <h2>Team Selection</h2>

        {teamList}
    </main>
}