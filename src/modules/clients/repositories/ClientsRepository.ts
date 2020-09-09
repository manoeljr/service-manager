import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/Client';
import IClientRepository from '../interfaces/IClientsRepository';

@EntityRepository(Client)
class ClientsRepository extends Repository<Client>
    implements IClientRepository {
    public async findByName(name: string): Promise<Client | undefined> {
        const findName = await this.findOne({
            where: { name },
        });
        return findName;
    }
}

export default ClientsRepository;
