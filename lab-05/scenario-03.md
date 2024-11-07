## Scenario 3: User Posts Query: Retrieve the most popular active posts and display their title and like count (NoSQL)

```
db.posts
  .find({ status: "active" }, { title: 1, likes: 1 })
  .sort({ likes: -1 });
```

### Refactor

```
db.posts.createIndex({ status: 1, likes: -1 });

db.posts
    .find({ status: "active" }, { title: 1, likes: 1 })
    .sort({ likes: -1 });
```

#### Explicación

Podríamos generar un índiceo para los campos `likes` y `status` esto para optimizar el filtrado por status y ordenamiento por likes.
