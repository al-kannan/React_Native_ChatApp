export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
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
}

export type Message = {
  id: String;
  content: String;
  createdAt: String; 
}

export type ChatRoom = {
  id: String;
  users: [Users];
  lastMessage: Message;
}
