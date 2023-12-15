import List from "../List/List";

export default function Profile() {
  const myInfo = {
    name: "Milana Ducina",
    location: "ST",
    Age: "29",
    Colors: [
      { id: 1, name: "red" },
      { id: 2, name: "green" },
      { id: 3, name: "yellow" },
    ],
  };

  return (
    <>
      <h1>Profile</h1>
      <p>Name:{myInfo.name}</p>
      <p>Location:{myInfo.location}</p>
      <p>Age:{myInfo.Age}</p>
      <h2>Favorite colors:</h2>
      <List Colors={myInfo.Colors}></List>
    </>
  );
}
