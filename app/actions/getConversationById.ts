import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (
  conversationId: string
) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }
  
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
<<<<<<< HEAD
      include: { 
=======
      include: {
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
<<<<<<< HEAD
    console.log(error, 'SERVER_ERROR',error.message)
=======
    console.log(error, 'SERVER_ERROR')
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
    return null;
  }
};

export default getConversationById;