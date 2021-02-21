import Link from "next/link"
import styles from '../styles/TeamSelection.module.css'

export default function TeamSelection ({teams_data}){
    
    const teamList = teams_data.map((team, index)=>{
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

export async function getStaticProps (){
    const teams_data = await fetch("https://cyprienpineau.github.io/data-bb-builder/teams.json")
    .then(r=>r.json())
    return {
        props:{
            teams_data
        }
    }
}