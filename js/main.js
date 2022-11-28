const { createApp } = Vue;



const app = createApp({

  data() {

    return {
      newMessage: [
        {
          message: "",

        },
      ],
      contatti: [



        {
          name: 'Michele',
          access: 'oggi alle 13:15',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [{
            date: ' 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: ' 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: ' 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Fabio',
          access: '10/01/2020 16:15',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [{
            date: '   16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: ' 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: ' 16:35:00',
            message: 'devo andare a fare la spesa.',
            status: 'received'
          }
          ],
        },
        {
          name: 'Samuele',
          access: '10/01/2020 20:15',
          avatar: 'img/avatar_3.jpg',
          visible: true,
          messages: [{
            date: ' 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: ' 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: ' 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Luisa',
          access: '23/07/2020 06:15',
          avatar: 'img/avatar_6.jpg',
          visible: true,
          messages: [{
            date: ' 15:30:55',
            message: 'Andiamo in pizzeria?',
            status: 'sent'
          },
          {
            date: ' 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },

      ],
      selectedUserIndex: 0,
      

    };

  },

  methods: {
    selectChat(index) {
      console.log('set active');
      this.selectedUserIndex = index;

    },
    sendAmessage() {

      // Messaggio inviato
      this.contatti[this.selectedUserIndex].messages.push({
        date: '10/01/2020',
        message: this.newMessage.message,
        status: 'sent'
      })
      this.newMessage.message = ''
      setTimeout(() => {
        this.contatti[this.selectedUserIndex].messages.push({
          date: '10/01/2020',
          message: 'Ok',
          status: 'received',
        })
      }, 1000);
    },
    deleteAmessage(indiceMessaggioDaCancellare) {

     
      this.contatti[this.selectedUserIndex].messages.splice(indiceMessaggioDaCancellare, 1);
    },




  }
}).mount('#app');