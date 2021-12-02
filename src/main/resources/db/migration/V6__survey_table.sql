create table survey_activity (
activity_id serial not null primary key,
survey_id int not null,
name text not null,
duration interval not null,
intensity int not null,
constraint survey_activity_survey_id_fk foreign key(survey_id) references survey(survey_id)
);
