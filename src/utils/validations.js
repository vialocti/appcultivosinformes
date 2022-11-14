const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 4;
const minNameLength = 8;


export const validateInput = (name, value) => {
    
    let hasError = false;
    let error = '';
    switch (name) {
        case 'email':
            if(value?.trim() === '') {
                hasError = true;
                error = `el ${name} es requerido`;
            } else if(!formatEmail.test(value)) {
                hasError = true;
                error = 'el email no es valido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'password':
            if(value?.trim() === '') {
                hasError = true;
                error = `el ${name} es requerido`;
            } else if(value.length < minPasswordLength) {
                hasError = true;
                error = `la contraseña debe tener al menos ${minPasswordLength} caracteres`;
            } else {
                hasError = false;
                error = '';
            }
            break;
            case 'nombre':
                if(value?.trim() === '') {
                    hasError = true;
                    error = `el ${name} es requerido`;
                } else if(value.length < minNameLength) {
                    hasError = true;
                    error = `el nombre debe tener al menos ${minNameLength} caracteres`;
                } else {
                    hasError = false;
                    error = '';
                }
                break;
        default:
            break;
    }
    return { hasError, error };
}