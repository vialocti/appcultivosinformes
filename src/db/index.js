import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase('cultivosControl.db')

export const init =()=>{
    
       
    const promise = new Promise((resolve, reject) => {
        
     
        db.transaction((tx)=>{
            tx.executeSql(
                 
                "CREATE TABLE IF NOT EXISTS informes(id INTEGER PRIMARY KEY NOT NULL, tecnica TEXT NOT NULL, cultivo TEXT NOT NULL,imagen TEXT NOT NULL,location TEXT NOT NULL)",
                [],
                () => resolve(),
                (_,err) =>reject(err)
                    
                )
            })               
            })
        return promise
     }

     // insertar informe
export const insertInforme =(tecnica,cultivo,imagen,location)=>{

    const promise= new Promise((resolve, reject) => {
        db.transaction((tx)=>{

            tx.executeSql(
                'INSERT INTO informes (tecnica,cultivo,imagen,location) VALUES(?,?,?,?)',
                [tecnica,cultivo,imagen,JSON.stringify(location)],
                (_,result) =>resolve(result),
                (_,err) => reject(err)
            
            )
        })
    })
    return promise
}

// lectura de informes
export const getInformes = ()=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM informes',
                [],
                (_,result)=>resolve(result),
                (_,err)=>reject(err)
            )

        })
    })
    return promise
}
