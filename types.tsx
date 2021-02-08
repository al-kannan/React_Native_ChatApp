export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ContactScreen: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Users = {
  id: String;
  name: String;
  imageURI: String;
  status: String;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String; 
  user: Users;
}

export type ChatRoom = {
  id: String;
  users: Users[];
  lastMessage: Message;
}
