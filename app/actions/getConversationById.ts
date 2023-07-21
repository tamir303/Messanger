import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import ConversationId from "../conversations/[conversationId]/page";

const getConversationById = async (ConversationId: string) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) return null;

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: ConversationId,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
};

export default getConversationById;
