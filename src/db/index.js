import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase('cultivosHidroponicos.db')

export const init =()=>{
    
       
    const promise = new Promise((resolve, reject) => {
        
     
        db.transaction((tx)=>{
            tx.executeSql(
                 
                "CREATE TABLE IF NOT EXISTS informes(id INTEGER PRIMARY KEY NOT NULL, tecnica TEXT NOT NULL, cultivo TEXT NOT NULL,imagen TEXT NOT NULL,latitud TEXT NOT NULL,longitud TEXT NOT NULL)",
               
                [],
                () => resolve(),
                (_,err) =>reject(err)
                    
                )
            })               
            })
        return promise
     }

     // insertar informe
export const insertInforme =(tecnica,cultivo,imagen,latitud,longitud)=>{

    const promise= new Promise((resolve, reject) => {
        db.transaction((tx)=>{

            tx.executeSql(
                'INSERT INTO informes (tecnica,cultivo,imagen,latitud,longitud) VALUES(?,?,?,?,?)',
                [tecnica,cultivo,imagen,latitud,longitud],
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
