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

  INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CY. Logo T-Shirt by Cyrus Clothing - Black', 25, 10, 10, 10, 10, 'CY. Logo T-Shirt by Cyrus Clothing - Black', 'https://i.ibb.co/PZykzjr/14-33-34-Cyrus-Clothing-Studio-social-media.jpg');

INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CY. Logo T-Shirt by Cyrus Clothing - White', 25, 5, 12, 0, 10, 'CY. Logo T-Shirt by Cyrus Clothing - White', 'https://i.ibb.co/Krj5Hqc/14-31-07-Cyrus-Clothing-Studio-social-media.jpg');

INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CYRUS Large Logo T-Shirt by Cyrus Clothing - Black', 25, 9, 11, 12, 12, 'CYRUS Large Logo T-Shirt by Cyrus Clothing - Black', 'https://i.ibb.co/j4jkqdH/14-24-52-Cyrus-Clothing-Studio-social-media.jpg');

INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CYRUS Large Logo T-Shirt by Cyrus Clothing - White', 25, 7, 5, 11, 0, 'CYRUS Large Logo T-Shirt by Cyrus Clothing - White', 'https://i.ibb.co/p4PX4JC/14-20-48-Cyrus-Clothing-Studio-social-media.jpg');

INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CYRUS Small Logo T-Shirt by Cyrus Clothing - Black', 25, 1, 10, 10, 10, 'CYRUS Small Logo T-Shirt by Cyrus Clothing - Black', 'https://i.ibb.co/yyN0n2c/14-18-18-Cyrus-Clothing-Studio-social-media.jpg');

INSERT INTO products (product, price, small, medium, large, extralarge, image_alt, image)
VALUES ('CYRUS Small Logo T-Shirt by Cyrus Clothing - White', 25, 10, 12, 13, 4, 'CYRUS Small Logo T-Shirt by Cyrus Clothing - White', 'https://i.ibb.co/FWYcsTW/14-06-25-Cyrus-Clothing-Studio-social-media.jpg');