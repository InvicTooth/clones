

import Image from 'next/image'

import styles from '@/styles/chatView.module.css'
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm'

const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messageContainer}>
        
      </div>
      <MessageForm />
    </div>
  )
}

export default ChatView