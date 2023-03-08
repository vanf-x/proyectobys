import * as yup from "yup";

// MIN 5 caracteres, 1 mayuscula, 1 minuscula, y un numero
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


/*
creacion de un password
contrasenia: yup.string().min(5).matches(passwordRules, "Por favor ingrese una contraseña válida.").required
*/

export const basicSchema = yup.object().shape({
    email: yup.string().email("Por favor ingrese un email válido.").required("Por favor ingrese un mail."),
    contrasenia: yup.string().min(5).matches(passwordRules, "Por favor ingrese una contraseña válida.").required("Por favor ingrese una contraseña.")
})