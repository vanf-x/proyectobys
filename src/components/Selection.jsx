
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