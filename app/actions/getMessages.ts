import prisma from "@/app/libs/prismadb";

const getMessages = async (
  conversationId: string
) => {
  console.log(conversationId,'----->>>')
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
    console.log('messagesss',messages)
    return messages;
  } catch (error: any) {
    return [];
  } 
};

export default getMessages;