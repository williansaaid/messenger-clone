'use client'

import { Conversation, User } from "@prisma/client"

interface ProfileDrawerProps {
    data: Conversation & {
        users: User[]
    };
    onClose: () => void;
    isOpen: boolean;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    data,
    onClose,
    isOpen
}) => {
    return (
        <div>ProfileDrawer</div>
    )
}

export default ProfileDrawer