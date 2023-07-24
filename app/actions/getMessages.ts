import prisma from "@/app/libs/prismadb";

const getMessages = async (
  conversationId: string
) => {
<<<<<<< HEAD
  console.log(conversationId,'----->>>')
=======
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc'
      }
    });
<<<<<<< HEAD
    console.log('messagesss',messages)
    return messages;
  } catch (error: any) {
    return [];
  } 
=======

    return messages;
  } catch (error: any) {
    return [];
  }
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
};

export default getMessages;