import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { pusherServer } from '@/app/libs/pusher'
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
<<<<<<< HEAD
    
    try {
        
=======
    try {
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            message,
            image,
<<<<<<< HEAD
            conversationid
        } = body;
        console.log(body,'------->')
=======
            conversationId
        } = body;

>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const newMessage = await prisma.message.create({
            include: {
                seen: true,
                sender: true
            },
            data: {
                body: message,
                image: image,
                conversation: {
<<<<<<< HEAD
                    connect: { id: conversationid }
=======
                    connect: { id: conversationId }
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
                },
                sender: {
                    connect: { id: currentUser.id }
                },
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                },
            }
        });


        const updatedConversation = await prisma.conversation.update({
            where: {
<<<<<<< HEAD
                id: conversationid
=======
                id: conversationId
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        });

<<<<<<< HEAD
        await pusherServer.trigger(conversationid, 'messages:new', newMessage);
=======
        await pusherServer.trigger(conversationId, 'messages:new', newMessage);
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073

        const lastMessage = updatedConversation.messages[updatedConversation.messages.length - 1];

        updatedConversation.users.map((user) => {
            pusherServer.trigger(user.email!, 'conversation:update', {
<<<<<<< HEAD
                id: conversationid,
=======
                id: conversationId,
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
                messages: [lastMessage]
            });
        });

        return NextResponse.json(newMessage)
    } catch (error) {
        console.log(error, 'ERROR_MESSAGES')
        return new NextResponse('Error', { status: 500 });
    }
}