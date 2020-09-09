import { getRepository } from 'typeorm';
import Client from '../entities/Client';

interface Request {
    name: string;
    date: Date;
}

class CreateClientService {
    public async createClient({ name, date }: Request): Promise<Client> {
        const clientRepository = getRepository(Client);
        const client = clientRepository.create({
            name,
            date,
        });
        await clientRepository.save(client);
        return client;
    }
}

export default CreateClientService;
