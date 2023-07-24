import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
<<<<<<< HEAD
  cluster: 'ap2',
=======
  cluster: 'eu',
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
<<<<<<< HEAD
    cluster: 'ap2',
=======
    cluster: 'eu',
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  }
);