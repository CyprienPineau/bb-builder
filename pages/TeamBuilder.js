import Link from "next/link"
import styles from '../styles/TeamBuilder.module.css'
import {useRouter} from 'next/router'

import React from 'react';
import { useEffect, useState } from "react"

import DownloadPDF from './../components/DownloadPDF'
import MyDocument from './../components/DocumentPDF';

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
                return <div className={styles.playerToHire} key={index}>
                    { 
                        hiredPLayersByType[index] != 0 && <a 
                            className={styles.minus}
                            onClick={()=>RemovePlayer(index)}
                        >
                            <div className={styles.imgcontainer}>
                                <svg className={styles.img} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.7876 8.21762C29.3121 5.6898 27.3107 3.68835 24.7828 2.2129C22.2544 0.737534 19.4943 0 16.5005 0C13.5069 0 10.7461 0.737534 8.21815 2.2129C5.6901 3.68812 3.68865 5.68957 2.21313 8.21762C0.737534 10.7458 0 13.5067 0 16.5C0 19.4935 0.73776 22.2539 2.2129 24.7823C3.68835 27.3101 5.6898 29.3116 8.21785 30.7872C10.7461 32.2625 13.5067 33.0001 16.5002 33.0001C19.4937 33.0001 22.2546 32.2625 24.7827 30.7872C27.3106 29.3121 29.312 27.3101 30.7873 24.7823C32.2625 22.2542 32.9999 19.4934 32.9999 16.5C33 13.5064 32.2625 10.7455 30.7876 8.21762ZM26.1255 17.875C26.1255 18.2474 25.9893 18.57 25.7171 18.8418C25.4447 19.1137 25.1225 19.2502 24.7503 19.2502C16.4182 19.2502 18.0941 19.2502 8.24998 19.2502C7.87764 19.2502 7.55549 19.1138 7.28323 18.8418C7.01113 18.5701 6.87507 18.2474 6.87507 17.875V15.1248C6.87507 14.7525 7.0112 14.4302 7.28323 14.1581C7.55542 13.8859 7.87757 13.7498 8.24998 13.7498C16.6088 13.7498 14.8895 13.7498 24.7503 13.7498C25.1227 13.7498 25.445 13.8859 25.7171 14.1581C25.9893 14.4301 26.1255 14.7524 26.1255 15.1248V17.875Z" fill="white"/>
                                </svg>
                            </div>
                        </a>
                    }
                    { (hiredPLayersByType[index] != player.max 
                        && nbPlayer < TEAM_MAX_SIZE ) && <a 
                            className={styles.plus}
                            onClick={()=>AddPlayer(index)}
                        >   
                            <div className={styles.imgcontainer}>
                                <svg className={styles.img} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.7876 8.21762C29.3121 5.6898 27.3107 3.68835 24.7828 2.2129C22.2544 0.737534 19.4943 0 16.5005 0C13.5069 0 10.7461 0.737534 8.21815 2.2129C5.6901 3.68812 3.68865 5.68957 2.21313 8.21762C0.737534 10.7458 0 13.5067 0 16.5C0 19.4935 0.73776 22.2539 2.2129 24.7823C3.68835 27.3101 5.6898 29.3116 8.21785 30.7872C10.7461 32.2625 13.5067 33.0001 16.5002 33.0001C19.4937 33.0001 22.2546 32.2625 24.7827 30.7872C27.3106 29.3121 29.312 27.3101 30.7873 24.7823C32.2625 22.2542 32.9999 19.4934 32.9999 16.5C33 13.5064 32.2625 10.7455 30.7876 8.21762ZM26.1255 17.875C26.1255 18.2474 25.9893 18.57 25.7171 18.8418C25.4447 19.1137 25.1225 19.2502 24.7503 19.2502H19.2502V24.7499C19.2502 25.1222 19.1137 25.4446 18.8417 25.7171C18.5698 25.989 18.2474 26.1251 17.8749 26.1251H15.1251C14.7527 26.1251 14.4304 25.989 14.1583 25.7171C13.8861 25.4447 13.75 25.1223 13.75 24.7499V19.2502H8.24998C7.87764 19.2502 7.55549 19.1138 7.28323 18.8418C7.01113 18.5701 6.87507 18.2474 6.87507 17.875V15.1248C6.87507 14.7525 7.0112 14.4302 7.28323 14.1581C7.55542 13.8859 7.87756 13.7498 8.24998 13.7498H13.7502V8.24976C13.7502 7.87734 13.8863 7.55526 14.1585 7.28301C14.4306 7.0109 14.7529 6.87485 15.1253 6.87485H17.8755C18.2478 6.87485 18.5703 7.01098 18.8422 7.28301C19.1142 7.55519 19.2507 7.87734 19.2507 8.24976V13.7498H24.7503C25.1227 13.7498 25.445 13.8859 25.7171 14.1581C25.9893 14.4301 26.1255 14.7524 26.1255 15.1248V17.875Z" fill="white"/>
                                </svg>
                            </div>
                        </a>
                    }
                    {(hiredPLayersByType[index] == player.max || nbPlayer == TEAM_MAX_SIZE ) 
                        && <div className={styles.noplus}></div>
                    }
                    <div className={styles.playerquantity}>{hiredPLayersByType[index]}</div> 
                    <div className={styles.playername}>{player.name}</div>
                    <div className={styles.playercost}>{player.cost + " 000 ¤"}</div>
                    { hiredPLayersByType[index] == player.max 
                        && <div className={styles.maxplayers} >{"Max. " + player.max}</div>
                    }
                </div>
            })
        }
    })

    return <main className={styles.main}>

        <Link href="/TeamSelection">
            <a className={styles.backHome}>| Go back</a>
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