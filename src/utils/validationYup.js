import { mixed, object, string } from "yup";

let userSchema = object({
  nombre: string("Nombre debe contener solo letras").required("Nombre es requerido"),
  telefono: mixed().required("Telefono es requerido"),
  email: string().email("Email no tiene el formato correcto").required("Email es requerido")
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm