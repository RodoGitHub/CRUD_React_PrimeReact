import React from "react"

const ObjectsView = ({ data, loading, error, setSearchObjects }) => {
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <button onClick={() => setSearchObjects(true)}>buscar objetos</button>
            {loading ? <p style={{ color: "green" }}>Cargando objetos</p>
                :

                <table border="1">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.color}</td>
                                <td>{data.age}</td>
                                <td>{data.power}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )

}

export default ObjectsView