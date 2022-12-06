import {object, string} from "yup";

const required_message = "Bu alanın girilmesi zorunludur!"

const contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email("Geçerli bir email adresi giriniz.").required(required_message),
    message: string().min(5, "Minimum 5 karakter olmalıdır.").required(required_message)
})

export default contactSchema;