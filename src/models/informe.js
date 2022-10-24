class Informe{
    constructor(id,fecha , tecnica, cultivo, imagen ){
        this.id = id.toString();
        this.fecha = Date().toString()
        this.tecnica=tecnica
        this.cultivo=cultivo
        this.imagen=imagen
        

    }
}

export default Informe