import React from "react"

const ObjectsView = ({ users, loading, error, setSearchObjects }) => {
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
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )

}

export default ObjectsView