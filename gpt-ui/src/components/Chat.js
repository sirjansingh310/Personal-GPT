import classNames from 'classnames'
import React, { useState, useRef } from 'react'
import { queryPrompt } from '../actions'

export default function Chat(props) {
    const [messages, setMessages] = useState([])
    const inputRef = useRef()

    const addPrompt = (msg) => {
        setMessages(prevInput => [...prevInput, msg, 'Typing...'])
        inputRef.current.value = ''
        
        queryPrompt(msg).then(res => {
            const response = res?.completion?.response || 'No result found from your knowledge base'
            setMessages(prevInput => [...prevInput.slice(0, -1), response])
        })
    }

    return (
        <div className='app-container__chat'>

            <div className='chat-container'>
                {messages.map((msg, index) => {
                    return (<div key = {index} className={classNames({ 'message-outgoing': index % 2 == 0, 'message-incoming': index % 2 == 1 })}>
                        <div className='bubble'>{msg}</div>
                    </div>)
                })}
            </div>

            <div className='input-box-container'>
                <div className='input-box'>
                    <input ref={inputRef} onKeyDown={e => {
                        if (e.key === 'Enter') {
                            addPrompt(e.target.value)
                        }
                    }} />
                    <img width={24} height={24} src='send-icon.svg' onClick={() => addPrompt(inputRef?.current?.value)} />
                </div>
            </div>
        </div>
    )
}