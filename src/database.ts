import {createPool} from 'mysql2/promise';

export async function connection() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'delivercompany',
        connectionLimit: 10
    });
    return connection;
}