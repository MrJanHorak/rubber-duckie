// Message Type Definition
export type Message = {
  user: string;
  text: string;
  timestamp: number;
};

export type Conversation = Message[];

