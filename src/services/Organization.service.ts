import { AppDataSource } from '../dataSource';
import { Organization } from '../models/Organization';

export class OrganizationService {
    private organizationRepository = AppDataSource.getRepository(Organization);

    async getAllOrganizations(): Promise<Organization[]> {
        return this.organizationRepository.createQueryBuilder("organization").getMany();
    }
    async getOrganizationById(id:number): Promise<Organization> {
        return this.organizationRepository.createQueryBuilder("organization").where("organization.id = :id", { id }).getOne();
    }

}
