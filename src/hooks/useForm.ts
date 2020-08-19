import { useState } from 'react';

interface UseFormProps{
    name: string,
    avatar: string,
    email: string,
    whatsapp: string,
    address: string,
    title: string,
    description: string

}
function useForm(initialValues: UseFormProps){
    const [values, setValues] = useState(initialValues)

    function setValue(chave: any, valor: string ){
        setValues({...values, [chave]: valor})
    }

    function handleChangeValues(event: {target: HTMLInputElement}){
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }
    function clearForm(){
        setValues(initialValues)
    }

    return {
        values,
        handleChangeValues,
        clearForm
    }
}

export default useForm