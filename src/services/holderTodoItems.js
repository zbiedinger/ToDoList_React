const items = [
{
    _id: "1",
    title: "Dishes",
    details: "Washer is clean",
    date: "Mar 7, 2021"
},
{
    _id: "2",
    title: "Take out trash",
    details: "Check bathroom trash",
    date: "Mar 10, 2021"
},
{
    _id: "3",
    title: "Do the laundry",
    details: "Dress pants are mixed in",
    date: "Mar 12, 2021"
}
];

export function getToDoList() {
    return items;
  }

  export function getToDoItem(id) {
    return items.find(m => m._id === id);
  }