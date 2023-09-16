# Book Catalog

# Rotas disponíveis:

# POST: /books
- body:
{
  "title": "O Conto da Aia",
  "author": "Margaret Atwood",
  "year": 1985,
  "publisher": "Nan A. Talese"
}

# GET /books/:id
- param: id
- return:
{
  "id": 1
  "title": "O Conto da Aia",
  "author": "Margaret Atwood",
  "year": 1985,
  "publisher": "Nan A. Talese"
}

# GET: /books?title=blabla
- optional query: title
- return:
[{"id": 1, "title": "O Conto da Aia","author": "Margaret Atwood","year": 1985,"publisher": "Nan A. Talese"},
{"id": 2, "title": "O Conto da Aia 2","author": "Margaret Atwood","year": 1985,"publisher": "Nan A. Talese"}, ...]

# PUT: /books/:id
- param: id

# DELETE: /books/:id
- param: id
