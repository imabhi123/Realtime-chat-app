import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";

import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import EmptyState from "@/app/components/EmptyState";
<<<<<<< HEAD
interface IParams {
  conversationid: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  console.log(params,'fhgkhgkhjgjkhgkjhgkjhg')
  const conversation = await getConversationById(params.conversationid);
  const messages = await getMessages(params.conversationid);
=======

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return ( 
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default ChatId;