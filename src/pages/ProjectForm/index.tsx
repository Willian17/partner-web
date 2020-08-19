import React, { FormEvent} from 'react';
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm';

import warningIcon from '../../assets/images/icons/warning.svg'

import Header from '../../components/Header';
import Input from '../../components/Input';
import './styles.css'
import api from '../../services/api';

export default function ProjectForm(){
    const history = useHistory()
    const initialValues = {
        name: '',
        avatar: '',
        email: '',
        whatsapp: '',
        address: '',
        title: '',
        description: ''

    }
    const {values, clearForm, handleChangeValues} = useForm(initialValues)

    async function handleCreateProject(event: FormEvent){
        event.preventDefault()
        await  api.post('projects', values).then(()=> {
            clearForm();
            history.push('/')
        }).catch(error => {
            console.log(error)
        })
    }


    return(
        <div id="page-project-form" className="container">
            <Header 
                title="Que incrível que você quer um sócio !!!"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateProject}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                            name="name"
                            label="nome completo"
                            value={values.name}
                            onChange={handleChangeValues}
                            required
                        />
                        <Input 
                            name="avatar"
                            label="Avatar"
                            value={values.avatar}
                            onChange={handleChangeValues}
                            required
                        />
                        <Input 
                            name="email"
                            label="email"
                            value={values.email}
                            onChange={handleChangeValues}
                            required
                        />
                        <Input 
                            name="whatsapp"
                            label="whatsapp"
                            value={values.whatsapp}
                            onChange={handleChangeValues}
                        />
                        <Input 
                            name="address"
                            label="Cidade/Estado"
                            value={values.address}
                            onChange={handleChangeValues}
                            required
                        />
                       
                    </fieldset>

                    <fieldset>
                        <legend>Sobre o negócio</legend>
                        <Input 
                            name="title"
                            label="Titulo"
                            value={values.title}
                            onChange={handleChangeValues}
                            required
                        />
                        <Input 
                            name="description"
                            label="Descrição"
                            value={values.description}
                            onChange={handleChangeValues}
                            required
                        />
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>

        </div>
    )
}