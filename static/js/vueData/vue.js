import { exportVue } from "../vueData/coreObjects/exportVue";
import { loader } from "../vueData/coreComponents/loader";

const { createApp } = Vue;

/*Objeto constructor estrategia: CORE*/
/*en otro archivo*/

/*Utilizar el método createApp y asignarlo*/
const app = createApp(CoreVue);

/*Montar la app*/
app.mount ("#app");