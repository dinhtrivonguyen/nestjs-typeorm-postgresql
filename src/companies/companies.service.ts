import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Company } from './company.entity';

//import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
//import { Companies } from 'src/dto/create-company.dto';
//import { UpdateCompanyDto } from 'src/dto/update-company.dto';

/*@Injectable()
export class CompaniesService extends TypeOrmCrudService <Company> {
    constructor (@InjectRepository(Company) repo) {
        super(repo); 
    }
}*/

@Injectable()
export class CompaniesService {
        constructor(
            @InjectRepository(Company)
            private companyRepository: Repository<Company>
        ) {}
    
        async createCompany(dto: Company): Promise<Company> {
            const company = await this.companyRepository.create(dto);
            return company;
            }
    
        async deleteCompany(id): Promise<any> {
            return await this.companyRepository.delete(id)
        }
    
        async updateInfo(id, company): Promise<any> {
            await this.companyRepository.update(id, company)
            return await this.companyRepository.createQueryBuilder('companies')
                .where(`companies.id = ${id}`)
                .getOne()
        }
    
        async findByName(name): Promise<any> {
            return await this.companyRepository.createQueryBuilder('companies')
                .select('companies.id')
                .where('companies.name = :name', { name: name })
                .getOne()
        }
    }