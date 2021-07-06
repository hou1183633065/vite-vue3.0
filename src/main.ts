import { createApp } from 'vue';

import router from './router'
import App from './App.vue'
// import './assets/styles/App.scss'
import './utils/.example'
// import MyPromise from './utils/MyPromise'
// console.log(import.meta.env)
// let newPromise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ code: 200 })
//         // reject({ code: 500 })
//     }, 1000);
// })
// newPromise.then((result: any) => {
//     console.log('-->', result);
//     return new MyPromise(resolve => {
//         setTimeout(() => {
//             console.log({ data: { a: 1 }, ...result });

//             resolve({ data: { a: 1 }, ...result })
//         }, 1000);
//     })
// }).then((result: any) => {
//     console.log('-->', result);
//     // return new MyPromise(resolve => {
//     //     setTimeout(() => {
//     //         resolve({ message: 'this is message', ...result })
//     //     }, 1000);
//     // })
// })

// .catch((err: any) => {
//     console.log(err);
// }).catch((err: any) => {
//     console.log(err);
// })
// .then((result: any) => {
//     console.log('-->', result);

// })


// console.log(newPromise);
const app = createApp(App)
app.use(router)
app.mount('#app')
