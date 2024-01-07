const userNames = {
  id: 1,
  name: "Parent",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 5,
          name: "Grandchild 1.1",
          children: [
            {
              id: 10,
              name: "Grandchild 1.1",
              children: [],
            },
          ],
        },
        {
          id: 6,
          name: "Grandchild 1.2",
          children: [
            {
              id: 8,
              name: "Grandchild 1.67",
              children: [],
            },
            {
              id: 9,
              name: "Grandchild 1.985",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Child 2",
      children: [],
    },
    {
      id: 4,
      name: "Child 3",
      children: [
        {
          id: 7,
          name: "Grandchild 3.1",
          children: [],
        },
      ],
    },
  ],
};

function recursion(users) {
  let names = [users.name];

  if (users.children.length > 0) {
    for (let i = 0; i < users.children.length - 1; i++) {
      console.log("children:", users.children[i]);
      // names[recursion(users)];
    }
  }
  return names;
}
console.log(recursion(userNames));
