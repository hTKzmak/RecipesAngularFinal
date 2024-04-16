let data = {
    "recipes": [
      {"id": 1, "name": "Classic Margherita Pizza",},
      {"id": 2, "name": "Classic Margherita Pizza 2",},
      {"id": 3, "name": "Classic Margherita Pizza 3",},
      {"id": 4, "name": "Classic Margherita Pizza 4",},
      {"id": 5, "name": "Classic Margherita Pizza 5",},
      {"id": 6, "name": "Classic Margherita Pizza 6",},
      {"id": 7, "name": "Classic Margherita Pizza 7",},
      {"id": 8, "name": "Classic Margherita Pizza 8",},
      {"id": 9, "name": "Classic Margherita Pizza 9",},
      {"id": 10, "name": "Classic Margherita Pizza 10",},
    ]
  }

//   console.log(data.recipes.filter((el) => el.id = (0.5 - Math.random())).splice(0, 6))
  console.log(Math.round(Math.random() * (data.recipes.length - 1 + 1)))