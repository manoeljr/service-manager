import Client from '../entities/Client';

export default interface IClientRepository {
    findByName(name: string): Promise<Client | undefined>;
}
