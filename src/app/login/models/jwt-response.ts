export interface JwtResponseI {
    dataUser:{
        id_seg_usuario:number,
        codigo: string,
        clave: string,
        accesToken: string,
        expiresIn: string
    }
}
