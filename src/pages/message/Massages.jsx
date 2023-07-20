import React from "react";
import MessageCard from "./MessageCard";

function ClientTable({ messages,setMessages }) {
  return (
    <table>
      <thead className="messages-table">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>phone</th>
          <th>ariza</th>
        </tr>
      </thead>
      <tbody>
        {messages?.map((item, index) =><MessageCard key={item.id} index={index} {...item} messages={messages} setMessages={setMessages}/>)}
      </tbody>
    </table>
  );
}

export default ClientTable;