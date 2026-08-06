// Importa o módulo eventos
import events from 'events'

// Cria um gerenciado de eventos
const eventMgmt = new events.EventEmitter();
eventMgmt.on('bomdia', (data) => {
    console.log(`Recebi um bom dia de: ${data}`)
})

// Inclui um subscriber ao evento
eventMgmt.addListener('boatarde', (data) => {
    console.log(`Aconteceu de ${data}`);
})

// Dispara o evento
eventMgmt.emit('bomdia', 'Pedro Balestra');
eventMgmt.emit('boatarde', 'Pedro Balestra');