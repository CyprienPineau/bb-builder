import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding:'30pt',
  },
  header:{
    width:'100%',
    padding:'50pt',
  },
  title:{
    fontSize:'30pt',
    fontWeight:'bold'
  },
  teamvalue:{
    fontSize:'20pt',
    fontWeight:'bold'
  },
  allplayershired:{
    display:'flex',
    flexDirection: 'column',
    gap:'20pt',
  },
  playerhired:{
    backgroundColor: '#E4E4E4',
    display:'flex',
    flexDirection: 'row',
    gap:'18pt',
  },
  quantity:{
    width : '30pt',
    fontSize:'18pt',
  },
  playertype:{
    flex:'1',
    fontSize:'18pt',
  },
  cost:{
    fontSize:'18pt',
    width : '90pt',
    textAlign:'right'
  }
});

// Create Document Component
const MyDocument = ({teamName, teamValue, players=[],hiredPlayers}) => (
  <Document>
    <Page size="A4" orientation='landscape' style={styles.page}> 
    {/* orientation='landscape' wrap={false}  */}
      <View style={styles.header}>
        <Text style={styles.title}>{teamName} Team</Text>
        <Text style={styles.teamvalue}>{teamValue + ' 000 ¤'} </Text>
      </View>
      <View style={styles.allplayershired}>
        {
          players.map((player,index)=>{
            return <View style={styles.playerhired} key={index}>
              <Text style={styles.quantity}>{hiredPlayers[player.name]}</Text>
              <Text style={styles.playertype}>{player.name}</Text>
              <Text style={styles.cost}>{player.cost} 000 $</Text>
            </View>
          })
        }
      </View>
    </Page>
  </Document>
);

export default MyDocument