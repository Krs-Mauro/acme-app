export const items = [
  {
    name: "name 1",
    description: "description with many words",
    owner: "the owner",
    email: "email@email.com",
  },
  {
    name: "name 2",
    description: "description with few words",
    owner: "a guy",
    email: "other@email.com",
  },
];

export const mockItem = {
  name: "Test Item",
  description: "Test description",
  owner: "John Doe",
  email: "john@email.com",
};

export const loggedWithItems = {
  isLoggedIn: true,
  items,
};
export const loggedWithoutItems = {
  isLoggedIn: true,
  items: [],
};
export const notLogged = {
  isLoggedIn: false,
  items: [],
};
