import React from "react"
import { Button } from 'primereact/button';

const ObjectsView = ({ 
    data, 
    name, 
    setName, 
    color, 
    setColor,
    age, 
    setAge, 
    power , 
    setPower ,
    setSearchObjects,
    handleSubmit ,
    onEditInit,
    onDelete={onDelete}, 
    editingId={editingId}}) => {
    

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /><br />

                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e)=> setColor(e.target.value)}
                    required
                /><br />

                <label htmlFor="age">Edad:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                    required
                /><br />

                <label htmlFor="power">Power:</label>
                <input
                    type="text"
                    id="power"
                    name="power"
                    value={power}
                    onChange={(e)=> setPower(e.target.value)}
                    required
                /><br />

                <button type="submit">{editingId ? "Actualizar" : "Guardar"}</button>

                </form>
            </div>

            <h1>Lista de Usuarios</h1>
            
            <button onClick={() => setSearchObjects(true)}>buscar objetos</button>
            

                <table border="1">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Color</th>
                            <th>Edad</th>
                            <th>Power</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                                <td>{data.name}</td>
                                <td>{data.color}</td>
                                <td>{data.age}</td>
                                <td>{data.power}</td>
                                <td> <Button
                                        icon="pi pi-pencil"
                                        className="p-button-warning p-button-sm"
                                        onClick={() => onEditInit(data)}
                                        tooltip="Editar"
                                    />
                                </td>
                                <td> <Button
                                        icon="pi pi-pencil"
                                        className="p-button-warning p-button-sm"
                                        onClick={() => onDelete(data)}
                                        tooltip="Delete"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
    )

}

export default ObjectsView