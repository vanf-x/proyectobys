
import { useState } from 'react';
import Select from 'react-select';


const us = [
    { label: 'java', value: 'java' },
    { label: 'javascript', value: 'javascript' },
]

export function Seleccion() {

    const [selectedSupplier, setSelectedSupplier] = useState();

    const handleSelectChange = ({ value }) => {
        console.log(value);
        setSelectedSupplier(value);
    }

    return <div>
        <Select
            options={us}
            onChange={handleSelectChange}
        />
    </div>
}
