USE mysql_db;

CREATE TABLE user (
    username varchar(100),
    email varchar(100),
    cellphone varchar(32),
    street varchar(100),
    house_number varchar(100),
    city varchar(100),
    CONSTRAINT USERPK PRIMARY KEY (email)
    );

CREATE TABLE delivery (
    delivery_id varchar(50) NOT NULL,
    budget float(10),
    client_id varchar(100) NOT NULL,
    shopper_id varchar(100),
    isPaid BOOLEAN DEFAULT false,
    shopperDone BOOLEAN DEFAULT false,
    clientDone BOOLEAN DEFAULT false,
    shopId varchar(32),
    CONSTRAINT DELIVERYPK PRIMARY KEY (delivery_id)
    );
 
 ALTER TABLE delivery
    ADD CONSTRAINT FK_DELIVERY_2_USER_CLIENT FOREIGN KEY (client_id) REFERENCES user (email);
ALTER TABLE delivery
    ADD CONSTRAINT FK_DELIVERY_2_USER_SHOPPER FOREIGN KEY (shopper_id) REFERENCES user (email);

 
 CREATE TABLE item (
 item_id varchar(50) NOT NULL,
 item_name varchar(255) NOT NULL,
 item_description varchar(5000),
 user_id varchar(100),
 CONSTRAINT ITEMPK PRIMARY KEY (item_id)
 );
 
ALTER TABLE item
    ADD CONSTRAINT FK_ITEM_2_USER FOREIGN KEY (user_id) REFERENCES user (email);

CREATE TABLE delivery_reference (
delivery_id varchar(50) NOT NULL,
item_id varchar(50) NOT NULL,
CONSTRAINT DELIVERY_REFERENCEPK PRIMARY KEY (delivery_id,item_id)
);

ALTER TABLE delivery_reference
    ADD CONSTRAINT FK_REFERENCE_2_DELIVERY FOREIGN KEY (delivery_id) REFERENCES delivery (delivery_id);
ALTER TABLE delivery_reference
    ADD CONSTRAINT FK_REFERENCE_2_ITEM FOREIGN KEY (item_id) REFERENCES item (item_id);
