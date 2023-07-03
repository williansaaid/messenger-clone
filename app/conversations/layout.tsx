import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationsList from "./components/ConversationsList"

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {

    const conversations = await getConversations();

    return (
        //@ts-expect-error Server component
        <Sidebar>
            <ConversationsList
                initialItems={conversations}
            />
            <div className="h-full">
                { children }
            </div>
        </Sidebar>
    )
}