INSERT INTO "user"
    ("id", "first_name", "last_name", "password", "username")
VALUES
    (1, 'chenhao', 'li', '$2b$10$nibvIGDuZV5/sfkclJ2/Q.9ZRVvC2hgXZ0sIRtAV4UJ0KzZOjUte6', 'tony');

INSERT INTO "category"
    ("id", "name")
VALUES
    (1, 'RPG'),
    (2, 'FPS');

INSERT INTO "order"
    ("id", "user_id", "status")
VALUES
    (1, 1, 'complete'),
    (2, 1, 'processing'),
    (3, 1, 'deliver');

INSERT INTO "product"
    ("id", "name", "price", "category_id")
VALUES
    (1, 'pal', 20, 1),
    (2, 'diablo', 15, 1),
    (3, 'cs', 10, 2),
    (4, 'wow', 50, 1);


INSERT INTO "orderProduct"
    ("id", "order_id", "product_id", "quantity")
VALUES
    (1, 1, 1, 3),
    (2, 2, 2, 5),
    (3, 1, 3, 21),
    (4, 3, 1, 15);


