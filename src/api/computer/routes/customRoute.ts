import { controllerImpl } from "../controllers/controllerImpl";

export default {
  routes: [
    {
      method: 'GET',
      path: '/computer/filtered/:lang',
      handler: controllerImpl.customAction,
      config: {
        auth: false,
      },
    },
    
  ],
};