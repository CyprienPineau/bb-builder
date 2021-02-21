import Link from "next/link"
import styles from '../styles/TeamSelection.module.css'

export default function TeamSelection ({AllTeamsData}){
    
    const teamList = AllTeamsData.map((team, index)=>{
        return <Link href={{pathname:'/TeamBuilder', query:{team:team.name}}} key={index}>
            <a className={styles.teamcontainer}>
                <div className={styles.imgcontainer}>
                    <img 
                        className={styles.img}
                        src={team.img}
                        alt={team.name + " team logo"}
                    />
                </div>

                <p className={styles.teamname}>
                    {team.name}
                </p>
            </a>
        </Link>
    })

    return <main className={styles.main}>

        <Link href="/">
            <a className={styles.backHome}>| Return Home</a>
        </Link>

        <h2 className={styles.title} >Team Selection</h2>

        <div className={styles.teamList}>
            {teamList}
        </div>
    </main>
}

export async function getStaticProps (){
    const AllTeamsData = await fetch("https://cyprienpineau.github.io/data-bb-builder/teams.json")
    .then(r=>r.json())
    return {
        props:{
            AllTeamsData
        }
    }
}