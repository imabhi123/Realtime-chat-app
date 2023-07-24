'use client'
import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();
  const conversationid = useMemo(() => {
    if (!params?.conversationid) {
      return '';
    }

    return params.conversationid as string;
  }, [params?.conversationid]);

  const isOpen = useMemo(() => !!conversationid, [conversationid]);

  return useMemo(() => ({
    isOpen,
    conversationid
  }), [isOpen, conversationid]);
};

export default useConversation;