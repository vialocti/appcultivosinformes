import * as SQLite from 'expo-sqlite'

const DB_NAME = 'informesCultivos.db'


/* conectar db
export const initDatabase=()=>{
    const db = SQLite.openDatabase(DB_NAME)
    return db
}
*/
const db = SQLite.openDatabase(DB_NAME)
// crear tablas

// tablas de usuario
export const createTableUsers=(db)=>{
    const query = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL ,email TEXT NOT NULL , clave TEXT NOT NULL)'
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{

            tx.executeSql(query,
                [],
                ()=>resolve(),
                (_,err) =>reject(err)
                )
        })

    })

    return promise
}

// tablas de informe
export const createTableInformes =(db)=>{
    const query='CREATE TABLE IF NOT EXISTS informes (id INTEGER PRIMARY KEY AUTOINCREMENT,tecnica TEXT NOT NULL, cultivo TEXT NOT NULL, imagen TEXT NOT NULL, solucionPh TEXT NOT NULL, solucionEc TEXT NOT NULL, latitud TEXT NOT NULL, longitud TEXT NOT NULL)'
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(query,
                [],
                ()=>resolve(),
                (_,err)=>reject(err)
                )
        })
    })
    
    return promise
}


// inicializacion rde la DB
export const init =async()=>{
    
      // const db = initDatabase()
       await createTableUsers(db)
       await createTableInformes(db)
       
       
}



// funciones de manejo de informes  
// insertar informe
export const insertInforme =(tecnica,cultivo,imagen,solucionPh,solucionEC,latitud,longitud)=>{
    
    
    const promise= new Promise((resolve, reject) => {
        db.transaction((tx)=>{

            tx.executeSql(
                'INSERT INTO informes (tecnica,cultivo,imagen,solucionPh,solucionEc,latitud,longitud) VALUES(?,?,?,?,?,?,?)',
                [tecnica,cultivo,imagen,solucionPh,solucionEC,latitud,longitud],
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


// funciones de usuarios
     // registro de usuario
     export const registrarUser =(nombre,email,clave)=>{

        const promise= new Promise((resolve, reject) => {
            db.transaction((tx)=>{
    
                tx.executeSql(
                    'INSERT INTO users (nombre,email,clave) VALUES(?,?,?)',
                    [nombre,email,clave],
                    (_,result) =>resolve(result),
                    (_,err) => reject(err)
                
                )
            })
        })
        return promise
    }

     // buscar usuario
         export const buscarUser =(email,clave)=>{
           // console.warn(email, clave)
            const promise = new Promise((resolve,reject)=>{
                db.transaction((tx)=>{
                    tx.executeSql(
                        `SELECT id,nombre FROM users WHERE email='${email}' AND clave='${clave}'`,
                        [],
                (_,result)=>resolve(result),
                (_,err)=>reject(err)
                    )
                })

            })
        return promise    
    }