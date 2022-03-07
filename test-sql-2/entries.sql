Use mysql_db;

INSERT INTO user
VALUES ("John Smith", "john@gmail.com",  "0176 445637", "Kingstreet", "16","Offenburg");

INSERT INTO user
VALUES ("Jane Smith", "jane@gmail.com", "0176 555677", "Sheffield Dene", "4","Offenburg");

INSERT INTO user
VALUES ("Bob Miller", "bob@gmail.com",  "0176 5534877", "Skylark Loan", "12","Chicago");

INSERT INTO user
VALUES ("EDEKA", "99999", "", "", "","");

INSERT INTO delivery
VALUES ("87c11d32-a6ea-4d2f-82ed-8e1186177f49",12.5, "john@gmail.com",null,false,false,false,null);

INSERT INTO delivery
VALUES ("b78f6ffd-16e0-4c11-94ea-b1455a5391ca",5, "jane@gmail.com",null,false,false,false,null);

INSERT INTO delivery
VALUES ("fff87acd-57ff-4b57-b140-a9f36c97ffbd",6, "bob@gmail.com",null,false,false,false,null);

INSERT INTO item
VALUES ("cf835e86-ae2c-49d4-a8a7-748c88d0e4f2","Milk", "any local milk, 1l", "john@gmail.com");

INSERT INTO item
VALUES ("d8325a6e-7c34-48d5-be36-7bf4f1c70276","Chicken", "chickenbreasts, about 500g", "john@gmail.com");

INSERT INTO item
VALUES ("7664b344-ee82-43b0-b560-1ab61506fd33","Bananas", "5 medium sized bananas", "john@gmail.com");

INSERT INTO item
VALUES ("55e79730-5b1c-49cd-ae08-56c7d5aeaae6","Onions", "6 small onions", "jane@gmail.com");

INSERT INTO item
VALUES ("63de552f-b22b-4d05-b295-7d949a6bf09d","Cherries", "500g in a glas", "jane@gmail.com");

INSERT INTO item
VALUES ("4a4a8082-a1f4-40b9-9b88-4be1fe8c5d9b","Peas", "frozen peas about 400g", "bob@gmail.com");

INSERT INTO item
VALUES ("1c06a387-41c7-40a3-ad97-84b470b7b888","Pumpkin", "one butternut", "bob@gmail.com");

INSERT INTO delivery_reference
VALUES("87c11d32-a6ea-4d2f-82ed-8e1186177f49","cf835e86-ae2c-49d4-a8a7-748c88d0e4f2");
INSERT INTO delivery_reference
VALUES("87c11d32-a6ea-4d2f-82ed-8e1186177f49","d8325a6e-7c34-48d5-be36-7bf4f1c70276");
INSERT INTO delivery_reference
VALUES("87c11d32-a6ea-4d2f-82ed-8e1186177f49","7664b344-ee82-43b0-b560-1ab61506fd33");
INSERT INTO delivery_reference
VALUES("b78f6ffd-16e0-4c11-94ea-b1455a5391ca","55e79730-5b1c-49cd-ae08-56c7d5aeaae6");
INSERT INTO delivery_reference
VALUES("b78f6ffd-16e0-4c11-94ea-b1455a5391ca","63de552f-b22b-4d05-b295-7d949a6bf09d");
INSERT INTO delivery_reference
VALUES("fff87acd-57ff-4b57-b140-a9f36c97ffbd","4a4a8082-a1f4-40b9-9b88-4be1fe8c5d9b");
INSERT INTO delivery_reference
VALUES("fff87acd-57ff-4b57-b140-a9f36c97ffbd","1c06a387-41c7-40a3-ad97-84b470b7b888");




INSERT INTO item
VALUES ("3a29c787-7e69-4b4f-9949-a7b89e50b310","EDEKA-Sausage", "200g", 99999);

INSERT INTO item
VALUES ("863db1c9-96eb-404e-81ac-540ebef7660e","EDEKA-Cereals", "500g", 99999);
INSERT INTO item
VALUES ("0aed49f1-e1f5-4296-925c-0a128d5055a1","EDEKA-Herbs", "1 pack", 99999);
INSERT INTO item
VALUES ("cd25b074-eea7-4c5a-a2ed-f623bbe8f8a0","EDEKA-Mayo", "1 jar", 99999);
INSERT INTO item
VALUES ("0f32b969-63cb-4166-b0df-9f8f1498874b","EDEKA-Salmon", "200g", 99999);
INSERT INTO item
VALUES ("68f410fc-555f-4b40-b697-5461f42073f2","EDEKA-White bread", "1 loaf", 99999);
INSERT INTO item
VALUES ("48e2e159-2321-4a1a-84bd-d7880deafca5","EDEKA-White Wine", "1 bottle", 99999);
INSERT INTO item
VALUES ("f18a0cb2-24c3-494f-af0c-1ddbba608437","EDEKA-Red Wine", "1 bottle", 99999);
INSERT INTO item
VALUES ("9ed2757b-9b74-4ea6-95ef-10aa7f921371","EDEKA-Banana", "1 unit", 99999);
INSERT INTO item
VALUES ("27161708-fdd7-4eca-a2c8-21fa4f223310","EDEKA-Milk", "1 unit", 99999);
INSERT INTO item
VALUES ("9b8d7430-2eea-4a68-a1a4-c3271b41ffbb","EDEKA-Eggs", "large(12) carton", 99999);
INSERT INTO item
VALUES ("d31e0427-e969-44e5-ba5f-ebdd79cded23","EDEKA-Beer", "sixpack", 99999);
INSERT INTO item
VALUES ("969febed-74f1-4522-84a2-bdfeab64a06c","EDEKA-Banana", "1 unit", 99999);



