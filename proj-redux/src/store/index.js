
//Ele usou createStore e essa função foi deprecada na biblioteca redux, substituindo por configureStore. 
import { act } from 'react';
import { configureStore } from 'redux';

// Defina o reducer que retorna o estado inicial
function reducer() {
    return {
        activeLesson: {},
        activeModule: {},
        modules: [
            {
                id: 1,
                title: "Iniciando com React",
                lessons: [
                    { id: 1, title: "Aula 1" },
                    { id: 2, title: "Aula 2" }
                ]
            },
            {
                id: 2,
                title: "Iniciando com Redux",
                lessons: [
                    { id: 3, title: "Aula 3" },
                    { id: 4, title: "Aula 4" }
                ]
            }
        ]
    }
}

// Crie a store passando o reducer como argumento
const store = configureStore(reducer);

export default store;