import { create } from "zustand"
import { Group } from "@prisma/client";

export type ModalType = 
    | "members"
    | "invite"
    | "createGroup"
    | "editGroup"
    | "leaveGroup"
    | "deleteGroup"
    | "deleteMember"
    | "deletePost"
    | "createPost"
    | "editPost"
    | "sendFeedback"

type ModalData = {
    group?: Group;
    apiUrl?: string;
    query?: Record<string, any>;
} 

type ModalStore = {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data) => set({ type, data, isOpen: true }),
    onClose: () => set({ type: null, data: {}, isOpen: false }),
}))
    