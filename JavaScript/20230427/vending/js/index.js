import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendinmachineEvents.js";

const colaGenerator = new ColaGenerator();
const vendinmachineEvents = new VendingMachineEvents();

// colaGenerator.loadData(); // -> colaGenerator 안에서 setup()에서 실행
// 탑레벨 await :  최상위 모듈에서 실행되는 await
await colaGenerator.setup();

vendinmachineEvents.bindEvent();