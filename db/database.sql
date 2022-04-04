CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product varchar(52) NOT NULL,
  price integer NOT NULL,
  small integer,
  medium integer,
  large integer,
  extralarge integer
);

INSERT INTO
  products (product, price, small, medium)
VALUES
  ('Official White T-shirt', 30, 2, 5);

INSERT INTO
  products (product, price, medium, large, extralarge)
VALUES
  ('Official Gray T-shirt', 30, 2, 7, 15);

INSERT INTO
  products (product, price, small, large)
VALUES
  ('Official Black T-shirt', 30, 2, 7);

  INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image, color, handle, category)
VALUES ('CY. Logo T-Shirt by Cyrus Clothing - Black', 25, 10, 10, 10, 10, 'CY. Logo T-Shirt by Cyrus Clothing - Black', 'https://i.ibb.co/PZykzjr/14-33-34-Cyrus-Clothing-Studio-social-media.jpg', asdasdad, asdasdasd, hoodie);

UPDATE products
SET product = 'Large Print Logo T-Shirt by Cyrus Clothing',
category = 'tshirts',
price = 30,
image_alt = 'Model wearing the graphic logo Cyrus Clothing hoodie.',
small = 11,
medium = 11, 
large = 9,
extralarge = 6,
image = 'https://i.ibb.co/m5rDdZ6/IMG-5905.jpg',
image_2 = 'https://i.ibb.co/Yy4C29d/IMG-5910.jpg',
color = 'black',
handle = 'large-print-logo-t-shirt-by-cyrus-clothing'
WHERE id = 15