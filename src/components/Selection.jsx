
import { useState } from 'react';
import Select from 'react-select';


const rol = [
    { label: 'Analista Tester Funcional', value: 'Analista Tester Funcional' },
    { label: 'Administrativo', value: 'Administrativo' },
    { label: 'Administrador', value: 'javascript' },
    { label: 'Administrador', value: 'Administrador' },
    { label: 'Analista', value: 'Analista' },
    { label: 'Analista Funcional', value: 'Analista Funcional' },
    { label: 'Arquitecto', value: 'Arquitecto' },
    { label: 'Back Office', value: 'Back Office' },
    { label: 'Business Analyst', value: 'Business Analyst' },
    { label: 'Call Taker', value: 'Call Taker' },
]


const skills = [
    { label: 'Java', value: 'Java' },
    { label: '.Net', value: '.Net' },
    { label: 'Android', value: 'Android' },
    { label: 'Angular', value: 'Angular' },
    { label: 'AS400', value: 'AS400' },
    { label: 'AWS Re start', value: 'AWS Re start' },

]

const senior = [
    { label: 'Trainee', value: 'Trainee' },
    { label: 'Jr', value: 'Jr' },
    { label: 'Jr+', value: 'Jr+' },
    { label: 'Ssr', value: 'Ssr' },
    { label: 'Sr', value: 'Sr' },
]

const contacto = [
    { label: 'Mi Bucle', value: 'Mi Bucle' },
    { label: 'Linkedin Propio', value: 'Linkedin Propio' },
    { label: 'In Mail', value: 'In Mail' },
    { label: 'Instragam', value: 'Instragam' },
    { label: 'EducationIT', value: 'EducationIT' },
]

export function SelecSkills() {

    const [selectedSupplier, setSelectedSupplier] = useState();

    const handleSelectChange = ({ value }) => {
        console.log(value);
        setSelectedSupplier(value);
    }

    return <div>
        <Select
            options={skills}
            onChange={handleSelectChange}
        />
    </div>
}

export function SelecRol() {

    const [selectedSupplier, setSelectedSupplier] = useState();

    const handleSelectChange = ({ value }) => {
        console.log(value);
        setSelectedSupplier(value);
    }

    return <div>
        <Select
            options={rol}
            onChange={handleSelectChange}
        />
    </div>
}

export function SelecSeniority() {

    const [selectedSupplier, setSelectedSupplier] = useState();

    const handleSelectChange = ({ value }) => {
        console.log(value);
        setSelectedSupplier(value);
    }

    return <div>
        <Select
            options={senior}
            onChange={handleSelectChange}
        />
    </div>
}

export function SelecContact() {

    const [selectedSupplier, setSelectedSupplier] = useState();

    const handleSelectChange = ({ value }) => {
        console.log(value);
        setSelectedSupplier(value);
    }

    return <div>
        <Select
            options={contacto}
            onChange={handleSelectChange}
        />
    </div>
}