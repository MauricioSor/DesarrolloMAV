import { useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
    const [legajo, setLegajo] = useState('');
    const [userData, setUserData] = useState(null);
    const [carrera, setCarrera] = useState('');
    const [rol, setRol] = useState('');

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`API_URL/users/${legajo}`);
            setUserData(response.data);
            setCarrera(response.data.carrera);
            setRol(response.data.rol);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserData(null);
        }
    };

    const updateUser = async () => {
        try {
            await axios.put(`API_URL/users/${legajo}`, { carrera, rol });
            console.log('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <h2>Buscar Usuario</h2>
            <input
                type="text"
                placeholder="Número de legajo"
                value={legajo}
                onChange={(e) => setLegajo(e.target.value)}
            />
            <button onClick={fetchUserData}>Buscar</button>

            {userData && (
                <div>
                    <h3>Datos del Usuario</h3>
                    <p>Nombre: {userData.nombre}</p>
                    <p>Email: {userData.email}</p>

                    <h3>Modificar Usuario</h3>
                    <label>
                        Carrera:
                        <input
                            type="text"
                            value={carrera}
                            onChange={(e) => setCarrera(e.target.value)}
                        />
                    </label>
                    <label>
                        Rol:
                        <input
                            type="text"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                        />
                    </label>
                    <button onClick={updateUser}>Guardar cambios</button>
                </div>
            )}
        </div>
    );
};

export default UserComponent;
