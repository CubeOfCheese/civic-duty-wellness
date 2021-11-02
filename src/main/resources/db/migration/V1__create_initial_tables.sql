--User and Survey tables
create table civic_duty_user (
    user_id serial not null primary key,
    fname text not null,
    lname text not null,
    user_type char not null,
    email varchar(50) not null,
    password varchar(50) not null,
    phone_number integer,
    zip_code integer,
    dob date,
    gender text,
    ethnicity varchar(20),
    emotional_imp integer not null,
    spiritual_imp integer not null,
    intellectual_imp integer not null,
    physical_imp integer not null,
    environmental_imp integer not null,
    financial_imp integer not null,
    social_imp integer not null,
    occupational_imp integer not null
);

create table survey (
    survey_id serial not null primary key,
    user_id int not null,
    survey_date date not null,
    emotional_perf integer not null,
    spiritual_perf integer not null,
    intellectual_perf integer not null,
    physical_perf integer not null,
    environmental_perf integer not null,
    financial_perf integer not null,
    social_perf integer not null,
    occupational_perf integer not null,
    constraint survey_user_id_fk foreign key(user_id) references civic_duty_user(user_id)
);
