import { AppDataSource } from '../dataSource';
import { Organization } from '../models/Organization';

export class OrganizationService {
    private organizationRepository = AppDataSource.getRepository(Organization);

    async getAllOrganizations(): Promise<Organization[]> {
        return this.organizationRepository.find();
    }
    async getOrganizationById(id): Promise<Organization> {
        return this.organizationRepository.findOne({where:{id: id}});
    }

    // Implement other methods as needed
}
