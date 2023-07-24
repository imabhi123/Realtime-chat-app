<<<<<<< HEAD
'use client'
=======
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();
<<<<<<< HEAD
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
=======

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
};

export default useConversation;