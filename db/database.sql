CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product varchar(52) NOT NULL,
  price integer NOT NULL,
  small integer,
  medium integer,
  large integer,
  extralarge integer
 );