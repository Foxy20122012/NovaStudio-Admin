import { NextResponse } from "next/server";
import { conn } from '../../../libs/mysql';

export async function GET() {
    try {
        // Realizar una consulta para obtener los datos de la tabla 'usuarios'
        const usersResult = await conn.query('SELECT * FROM usuarios');

        // Extraer los datos de la consulta
        const usersData = usersResult.map(user => ({
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            edad: user.edad
        }));

        console.log('Datos de usuarios:', usersData);

        return NextResponse.json({ users: usersData });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        return NextResponse.json({ error: "Error al conectar con la base de datos" });
    }
}
