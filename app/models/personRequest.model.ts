export class PersonRequest{
    constructor(
        public Id: number,
        public keyword: string,
        public skipCount: number,
        public takeCount: number,
        public  sortOrder: string,
        public orderBy: string,
        public countryCode: string
    ) {
        this.Id = 0;
        this.keyword = "";
        this.skipCount = 0;
        this.takeCount = 3;
        this.sortOrder = "";
        this.orderBy = "";
        this.countryCode = "";
    }
}