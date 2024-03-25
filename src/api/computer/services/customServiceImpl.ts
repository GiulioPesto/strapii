interface CustomService {
  customServiceMethod(lang: string): Promise<any[]>;
}

const customServiceImpl: CustomService = {
  async customServiceMethod(lang) {
    // Custom logic to fetch data from the database or any other source
    const data = await strapi.db.query(`api::computer.computer`).findMany();
    console.log(data)
    // Filter the data based on the locale
    const filteredData = data.filter(item => item.locale === lang);
    console.log(filteredData)
    return filteredData;
  }
};

export default customServiceImpl;