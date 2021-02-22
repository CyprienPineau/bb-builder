import Link from "next/link"
import styles from '../styles/TeamBuilder.module.css'
import {useRouter} from 'next/router'

import React from 'react';
import { useEffect, useState } from "react"

import DownloadPDF from './../components/DownloadPDF'
import MyDocument from './../components/DocumentPDF';

import BuildElement from './../components/BuildElement';

export default function TeamBuilder ({AllTeamsData}){
    const router = useRouter()
    let TeamData = [];
    const TEAM_MAX_SIZE = 16;

    const [hiredPLayersByType,setHiredPLayersByType] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    // 1616 joueurs c'est le maximum de joueurs possible dans une équipe

    const [teamValue,setTeamValue] = useState(0)
    const [nbPlayer,setNbPlayer] = useState(0)

    let playersList;

    const calculateTeamValue = () =>{
        let teamValue_temp = 0
        TeamData.players.map((player,index)=>{
            teamValue_temp = teamValue_temp + hiredPLayersByType[index] * player.cost;
        })
        setTeamValue(teamValue_temp);
    }

    const calculateNbPlayer=()=>{
        let playerCount = 0;
        hiredPLayersByType.map((nbPlayer,index)=>{
            playerCount = playerCount + nbPlayer
        })

        setNbPlayer(playerCount);
    }

    const AddPlayer = (playerId)=>{
        if( nbPlayer < TEAM_MAX_SIZE ){
            if (hiredPLayersByType[playerId] != TeamData.players[playerId].max){
                let hiredPLayersByType_temp = hiredPLayersByType;
                hiredPLayersByType_temp[playerId]++

                setHiredPLayersByType([...hiredPLayersByType_temp])
                
                calculateTeamValue()
                calculateNbPlayer()
            }
        }
    }

    const RemovePlayer = (playerId)=>{
        if (hiredPLayersByType[playerId] != 0){
            let hiredPLayersByType_temp = hiredPLayersByType;
            hiredPLayersByType_temp[playerId]--

            setHiredPLayersByType([...hiredPLayersByType_temp])

            calculateTeamValue()
            calculateNbPlayer()
        }
    }

    // Récupération des joueurs de l'equipe selectionne
    AllTeamsData.map((team)=>{
        if(team.name == router.query.team){
            TeamData = team;

            playersList = team.players.map((player,index)=>{
                return <BuildElement
                    id = {index}
                    title = {player.name}
                    cost = {player.cost}
                    quantity = {hiredPLayersByType[index]}
                    max = {player.max}
                    Add = {AddPlayer}
                    Remove = {RemovePlayer}
                    isAddAnaible = {!(nbPlayer==TEAM_MAX_SIZE)}
                    key={index}
                />
            })
        }
    })

    return <main className={styles.main}>

        <Link href="/TeamSelection">
            <a className={styles.backHome}>| Back to team selection</a>
        </Link>

        <div className={styles.titlecontainer}>
            <img src={TeamData.img} alt={TeamData.name + "'s Logo"}/>
            <h2 className={styles.title}>{TeamData.name}</h2>
            <p className={styles.teamcost}>{"Team Value : " + teamValue * 1000 +" ¤"}</p>
        </div>

        { nbPlayer != 0 
            && <p className={styles.teamnbplayer}>
                {nbPlayer == 1 ? nbPlayer + " player" : nbPlayer + " players"}
            </p>
        }
        { nbPlayer == TEAM_MAX_SIZE && <p className={styles.teamfull}>Maximun team size reached</p>}

        <div className={styles.allPlayerToHire}>
            {playersList}
        </div>
        
        <DownloadPDF 
            document={
                <MyDocument 
                    teamValue={teamValue}
                    teamName={TeamData.name}
                    players={TeamData.players} 
                    hiredPLayersByType={hiredPLayersByType}
                />
            }
            title={TeamData.name}
        />

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