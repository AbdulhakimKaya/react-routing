import React from 'react';
import {Formik, useFormik} from "formik";
import validations from "./validations";
import './styles.css'
function Contact(props) {
    const {handleSubmit, handleChange,handleBlur, values, isSubmitting, errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: async (values,bag) => {
            // submit butonuna bastıktan sonra 1 saniye beklemesi simüle ediliyor
            await new Promise((r) => setTimeout(r,1000));

            // backend validasyonlarından gelen hata mesajının gösterimi simüle ediliyor
            if (values.email === "test@test.com") {
                return bag.setErrors({email: "Bu mail adresi zaten kullanılıyor"})
            }

            // form submit edildikten sonra içindeki değerler silinsin diye kullanılır
            bag.resetForm()
        },
        // hazırladığımız validasyon kurallarının uygulanması için tanımlanır
        validationSchema: validations
    })
    return (
        <div>
            <h2>Contact</h2>

            <form onSubmit={handleSubmit} className={"contact-form"}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    {/* butona basıldıktan sonra işlem sürerken input ların disable olması için isSubmitting kullanılır*/}
                    <input id="firstName" name="firstName" placeholder="Jane"
                           value={values.firstName}
                           onChange={handleChange("firstName")}
                           onBlur={handleBlur('firstName')}
                           disabled={isSubmitting}
                    />
                    {errors.firstName && touched.firstName && <div className={"error"}>{errors.firstName}</div>}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    {/* onBlur da handleBlur ile ilgili input dan ayrıldığı an touched uyarılır
                    touched ile o alana girilip girilmediği bool olarak geri döner eğer input a girilip validasyon sağlanmadan çıkılırsa uyarı verilir */}
                    <input id="lastName" name="lastName" placeholder="Doe"
                           value={values.lastName}
                           onChange={handleChange("lastName")}
                           onBlur={handleBlur('lastName')}
                           disabled={isSubmitting}
                    />
                    {errors.lastName && touched.lastName && <div className={"error"}>{errors.lastName}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur('email')}
                        disabled={isSubmitting}
                    />
                    {errors.email && touched.email && <div className={"error"}>{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="email">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message.."
                        value={values.message}
                        onChange={handleChange("message")}
                        onBlur={handleBlur('message')}
                        disabled={isSubmitting}
                    />
                    {errors.message && touched.message && <div className={"error"}>{errors.message}</div>}
                </div>
                {/* butona basıldıktan sonra işlem sürerken butonun disable olması için isSubmitting kullanılır*/}
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;