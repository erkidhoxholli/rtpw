##### Queries
# Write your query or mutation here
mutation {
  createRecipe(
    userId: 5
    title: "Cooked by bond"
    ingredients: "Salt, Pepper"
    direction: "Add salt, Add pepper"
  ) {
    id
    title
    ingredients
    direction
    user {
      id
      name
      email
    }
  }
}
# Write your query or mutation here
mutation {
  createUser(
    name: "James bond 22"
    email: "james@bond.com"
    password: "bond123"
  ) {
      id
      name
      email
  }
}

query {
  allUsers(page: 2, pageSize: 3) {
    pageInfo {
      currentPage
      pageCount
      perPage
      itemCount
      hasNextPage
      hasPreviousPage
    }
    results {
      id
      name
      email
      recipes {
        id
        direction
        ingredients
      }
    }
  }
}

query {
  allRecipes(page: 0, pageSize: 3) {
     pageInfo {
      currentPage
      pageCount
      perPage
      itemCount
      hasNextPage
      hasPreviousPage
    }
    results {
      id
    direction
    ingredients
    }
    
  }
}

# Write your query or mutation here
mutation {
  login(
    email: "james@bond.com3"
    password: "bond1233"
  ) {
      user{
        email
      }
      token
  }
}

# Write your query or mutation here
mutation {
  signup(
    email: "admin@gmail.com"
    password: "admin123"
    name: "Erkid Hoxholli"
  ) {
      user{
        email
      }
      token
  }
}