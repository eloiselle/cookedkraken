USE cookedkraken_db;

INSERT INTO version_specific 
( id_version_specific, name, description ) VALUES
( 1, 'Dont Starve Together', 'Everyone knows you just are not able to survive on your own'),
( 2, 'Dont Starve', 'Pro tip: Read the game title');
( 3, 'Hamlet', 'Like the piece');
( 4, 'Shipwrecked', 'Oh no');
( 5, 'Reign of Giants', 'The giants are there');

INSERT INTO ingredient
( id_ingredient, name, description, hp_value, hunger_value, sanity_value, spoil_time, can_cook, id_version_specific ) VALUES
( 1, 'Carrot', 'It looks orange', 5, 10, 5, 30, true, 1),
( 2, 'Stick', 'Not so sharp huh', 20, 0, 0, 100, false, 2),
( 3, 'Apple', 'Physics were discovered by this', 10, 5, 5, 20, true, 1),
( 4, 'Weird bear meat', 'Someone died for you to have this', 50, 50, 10, 50, true, 2);

INSERT INTO meal
( id_meal, name, description, cook_time, hp_value, hunger_value, sanity_value, spoil_time, id_version_specific) VALUES
( 1, 'bacon and eggs', 'Ah yes, good old classic', 10, 30, 15, 20, 20, 1),
( 2, 'Monster meat balls', 'Not the balls you have in mind', 20, 50, 50, 0, 10, 1),
( 3, 'Butterfly cupcakes', 'Now you are just pure evil', 5, 10, 10, 5, 30, 2);

INSERT INTO permission 
( id_permission, name, description ) VALUES
( 1, 'admin', 'Do as you wish chief' ),
( 2, 'user', 'Global user of this wonderfull website');

INSERT INTO user
( id_user, username, password, id_permission ) VALUES
( 1, 'incheap', 'admin', 1),
( 2, 'DeltaHit', 'admin1', 1),
( 3, 'Cortex', 'user', 2);

INSERT INTO session
( id_session, expiration, ipv4, id_user ) VALUES
( 1, 10.00, '192.168.1.1', 1),
( 2, 10.00, '192.168.1.2', 2),
( 3, 10.00, '192.168.1.3', 3);

INSERT INTO ingredient_type
( id_ingredient_type, name, description ) VALUES
( 1, 'Vegetable', 'Mother nature created this for us, now eat it and shut it'),
( 2, 'Fruit', 'Is tomatoes really a fruit ?'),
( 3, 'Tool', 'Nope, that will not save you from dying by hunger'),
( 4, 'Monster food', 'Please, do not eat that !!');

INSERT INTO object_type
( id_object_type, name, description) VALUES
( 1,'Plant', 'Most of them are venomus. Pick your poison'),
( 2,'Rock', 'One step away from being Heavy Metal'),
( 3,'Animal', 'Just like you'),
( 4,'Monster', 'You cannot see most of them for now');


INSERT INTO object_instance
( id_object_instance, name, image_url, description, id_object_type, id_version_specific ) VALUES
( 1, 'Gold nugget','no data yet !', 'OHH SHINY', 2, 1),
( 2, 'Rose','no data yet !', 'Now would not that be romantic if it was in another game', 1, 1),
( 3, 'Monster Leg','no data yet !', 'You just decapitaed a living being, you should feel bad about yourself', 4, 1),
( 4, 'Butterfly wing','no data yet !', 'WHAT!? Really!?', 3, 2);

INSERT INTO inventory
( id_user, id_ingredient, quantity ) VALUES
( 1, 2, 1),
( 1, 1, 7),
( 2, 3, 2),
( 2, 1, 5),
( 2, 2, 5),
( 3, 3, 3);

INSERT INTO favorite
( id_user, id_meal ) VALUES
( 1, 1),
( 1, 2),
( 2, 2),
( 2, 3),
( 2, 1);

INSERT INTO ta_meal_ingredient 
( id_meal, id_ingredient, quantity ) VALUES
( 1, 1, 3),
( 1, 2, 1),
( 2, 4, 5),
( 3, 2, 1),
( 3, 3, 2),
( 3, 1, 2);

INSERT INTO ta_ingredient_object_instance 
( id_object_instance , id_ingredient, drop_chance ) VALUES
( 1, 1, 60),
( 2, 3, 10),
( 1, 2, 100);

INSERT INTO ta_ingredient_ingredient_type 
( id_ingredient, id_ingredient_type, type_value) VALUES
( 1, 1, 1),
( 2, 3, 1),
( 3, 2, 0.5),
( 4, 4, 1);



