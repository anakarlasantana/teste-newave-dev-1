/**
 * Q.2 - Utilizando os arquivos presentes em power_ranges.zip
 * faça uma QUERY que retorne as TOP 5 temporadas com a maior
 * media de votos onde a nota da temporada tenha sido maior
 * que '6.5'
 * 
 * Auxilio: você pode utilizar o site a seguir para carregar
 * os dados e fazer as consultas
 * @link https://sqliteonline.com
 * 
 * Dado retirado de https://www.kaggle.com/karetnikovn/power-rangers-dataset
 */
Resposta:
1.Filtrei as season com notas acima de 6.5;

INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('id', 'season_title', 'season_num', 'number_of_episodes', 'air_date_first_ep', 'air_date_last_ep', 'producer', 'IMDB_rating');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('6', 'In Space', '6', '43', '1998-02-06', '1998-11-21', 'Saban', '7.3');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('9', 'Time Force', '9', '40', '2001-02-03', '2001-11-17', 'Saban', '7.1');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('7', 'Lost Galaxy', '7', '45', '1999-02-06', '1999-12-18', 'Saban', '6.9');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('12', 'Dino Thunder', '12', '38', '2004-02-14', '2004-11-20', 'Disney', '6.8');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('26', 'Beast Morphers (Season 1)', '26', '22', '2019-03-02', '2019-12-14', 'Saban Brands', '6.8');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('27', 'Beast Morphers (Season 2)', '27', '22', '2020-02-22', '2020-12-12', 'Saban Brands', '6.8');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('28', 'Dino Fury', '28', '44', '2021-09-13', '2022', 'Saban Brands', '6.8');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('13', 'S.P.D.', '13', '38', '2005-02-05', '2005-11-14', 'Disney', '6.7');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('14', 'Mystic Force', '14', '32', '2006-02-20', '2006-11-13', 'Disney', '6.7');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('4', 'Zeo', '4', '50', '1996-04-20', '1996-11-27', 'Saban', '6.6');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('16', 'Jungle Fury', '16', '32', '2008-02-18', '2008-11-03', 'Disney', '6.6');
INSERT INTO "main"."notas" ("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8") VALUES ('17', 'R.P.M.', '17', '32', '2009-03-07', '2009-12-26', 'Disney', '6.6');

2. Fiz uma média dos votos por episódios das season(série) com notas acima de 6.5;

SELECT field2, round(field7) AS media
FROM Beast
GROUP BY field2

3. Com a média das season (série) pude comparar e ver quais eram as tops 5;

INSERT INTO "main"."Top5" ("field2", "media") VALUES ('In Space', '387');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Zeo', '320');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Lost Galaxy', '230');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Dino Thunder', '93');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('S.P.D.', '84');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Jungle Fury', '83');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Mystic Force', '82');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Beast Morphers (Season 1)', '81');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Time Force', '79');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('Beast Morphers (Season 2)', '70');
INSERT INTO "main"."Top5" ("field2", "media") VALUES ('R.P.M.', '66');

TOP 5: 
1 - In Space 387
2 - Zeo 320
3 - Lost Galazy 230
4 - Dino Thunder 93
5 - S.P.D 84

// Usei o DB Browser for SQLite para consulta //
