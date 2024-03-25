import { Context } from 'koa';
import customServiceImpl from '../services/customServiceImpl';

interface CustomController {
  customAction(ctx: Context<any>): Promise<void>; // Specify 'any' as the type argument
}

export const controllerImpl: CustomController = {
  async customAction(ctx) {
    const lang = ctx.params.lang;
    // Custom logic to fetch data from the database or any other source
    const data = await customServiceImpl.customServiceMethod(lang);
    // Manipulate the response as needed
    const modifiedData = data.map(item => ({
      id: item.id,
      title: item.title,
      locale: item.locale,
      // Add any additional fields or modify existing ones
    }));

    // Send the custom response
    ctx.body = modifiedData;
  }
};