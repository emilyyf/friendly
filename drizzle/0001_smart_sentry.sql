CREATE TABLE "appointments" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "appointments_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"child_id" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"ig" varchar(255),
	"weight" varchar(255),
	"pa" varchar(255),
	"au" varchar(255),
	"bcf" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "children" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "children_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"household_id" integer NOT NULL,
	"mother_id" integer NOT NULL,
	"birth" timestamp,
	"age" varchar(255),
	"local" varchar(255),
	"race" varchar(255),
	"alive_birth_certificate" varchar(255),
	"birth_certificate" varchar(255),
	"rg" varchar(255),
	"cpf" varchar(255),
	"sus_card" varchar(255),
	"blood_type" varchar(255),
	"weight_at_birth" varchar(255),
	"height_at_birth" varchar(255),
	"first_apgar" varchar(255),
	"fifth_apgar" varchar(255),
	"neonatal_heel_prick" timestamp,
	"hear_test" timestamp,
	"hearing_triage" timestamp,
	"eye_test" varchar(255),
	"od" varchar(255),
	"oe" varchar(255),
	"pregnancy_time" varchar(255),
	"login" varchar(255),
	"msd" varchar(255),
	"mmii" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exams" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "exams_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"medical_history_id" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"result" varchar(255),
	"igm" varchar(255),
	"igg" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "households" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "households_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"code" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"adress" varchar(255),
	"adress_number" varchar(255),
	"adress_complement" varchar(255),
	"cep" varchar(255),
	"city" varchar(255),
	"neighborhood" varchar(255),
	"residence_type" varchar(255),
	"rent_value" integer,
	"building_material" varchar(255),
	"in_house_bathroom" boolean,
	"residents" integer,
	"rooms" integer,
	"beds" integer,
	"car" boolean,
	"television" boolean,
	"refrigerator" boolean,
	"microwave" boolean,
	"washing_machine" boolean,
	"road_type" varchar(255),
	"refering_person" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "logs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "logs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"description" varchar(2000),
	"action" varchar(255) NOT NULL,
	"table" varchar(255) NOT NULL,
	"row_id" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "medical_histories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "medical_histories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"person_id" integer NOT NULL,
	"smoker" boolean,
	"alcohool" boolean,
	"abortations" integer,
	"vaginal_deliveries" integer,
	"c_sections" integer,
	"pregnancy" varchar(255),
	"blood_type" varchar(255),
	"blood_glucose" varchar(255),
	"syphilis" varchar(255),
	"hiv" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "notes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"child_id" integer,
	"person_id" integer,
	"date" timestamp DEFAULT now() NOT NULL,
	"description" varchar(2000),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "participations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "participations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"child_id" integer,
	"date" timestamp DEFAULT now() NOT NULL,
	"description" varchar(2000),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "persons" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "persons_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"household_id" integer NOT NULL,
	"birth" timestamp,
	"age" varchar(255),
	"name" varchar(255),
	"country" varchar(255),
	"uf" varchar(255),
	"phone" varchar(255),
	"graduation" varchar(255),
	"rg" varchar(255),
	"rg_exp" timestamp,
	"cpf" varchar(255),
	"sus_card" varchar(255),
	"card_series" varchar(255),
	"card_uf" varchar(255),
	"company" varchar(255),
	"work_function" varchar(255),
	"employment_card" varchar(255),
	"hiring_date" timestamp,
	"resignation_date" timestamp,
	"salary" integer,
	"extra_income" integer,
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "personVaccines" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "personVaccines_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"person_id" integer NOT NULL,
	"vaccine_id" integer NOT NULL,
	"dosage_id" integer NOT NULL,
	"medical_history_id" integer NOT NULL,
	"date" timestamp,
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "scholarships" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "scholarships_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"child_id" integer,
	"grade" varchar(255),
	"school" varchar(255),
	"year" varchar(255),
	"period" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ultrassonographies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ultrassonographies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"child_id" integer NOT NULL,
	"medical_history_id" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"weight" varchar(255),
	"height" varchar(255),
	"percentage" varchar(255),
	"bcf" varchar(255),
	"ila" varchar(255),
	"liqam" varchar(255),
	"placenta" varchar(255),
	"degree" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vaccineDosages" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "vaccineDosages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"vaccine_id" integer NOT NULL,
	"description" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vaccines" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "vaccines_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255),
	"create_log_id" integer NOT NULL,
	"update_log_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_household_id_households_id_fk" FOREIGN KEY ("household_id") REFERENCES "public"."households"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_mother_id_persons_id_fk" FOREIGN KEY ("mother_id") REFERENCES "public"."persons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_medical_history_id_medical_histories_id_fk" FOREIGN KEY ("medical_history_id") REFERENCES "public"."medical_histories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "households" ADD CONSTRAINT "households_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "households" ADD CONSTRAINT "households_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "medical_histories" ADD CONSTRAINT "medical_histories_person_id_persons_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."persons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "medical_histories" ADD CONSTRAINT "medical_histories_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "medical_histories" ADD CONSTRAINT "medical_histories_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_person_id_persons_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."persons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participations" ADD CONSTRAINT "participations_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participations" ADD CONSTRAINT "participations_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participations" ADD CONSTRAINT "participations_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "persons" ADD CONSTRAINT "persons_household_id_households_id_fk" FOREIGN KEY ("household_id") REFERENCES "public"."households"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "persons" ADD CONSTRAINT "persons_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "persons" ADD CONSTRAINT "persons_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_person_id_persons_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."persons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_vaccine_id_vaccines_id_fk" FOREIGN KEY ("vaccine_id") REFERENCES "public"."vaccines"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_dosage_id_vaccineDosages_id_fk" FOREIGN KEY ("dosage_id") REFERENCES "public"."vaccineDosages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_medical_history_id_medical_histories_id_fk" FOREIGN KEY ("medical_history_id") REFERENCES "public"."medical_histories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personVaccines" ADD CONSTRAINT "personVaccines_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "scholarships" ADD CONSTRAINT "scholarships_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "scholarships" ADD CONSTRAINT "scholarships_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "scholarships" ADD CONSTRAINT "scholarships_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ultrassonographies" ADD CONSTRAINT "ultrassonographies_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ultrassonographies" ADD CONSTRAINT "ultrassonographies_medical_history_id_medical_histories_id_fk" FOREIGN KEY ("medical_history_id") REFERENCES "public"."medical_histories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ultrassonographies" ADD CONSTRAINT "ultrassonographies_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ultrassonographies" ADD CONSTRAINT "ultrassonographies_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vaccineDosages" ADD CONSTRAINT "vaccineDosages_vaccine_id_vaccines_id_fk" FOREIGN KEY ("vaccine_id") REFERENCES "public"."vaccines"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vaccineDosages" ADD CONSTRAINT "vaccineDosages_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vaccineDosages" ADD CONSTRAINT "vaccineDosages_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vaccines" ADD CONSTRAINT "vaccines_create_log_id_logs_id_fk" FOREIGN KEY ("create_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vaccines" ADD CONSTRAINT "vaccines_update_log_id_logs_id_fk" FOREIGN KEY ("update_log_id") REFERENCES "public"."logs"("id") ON DELETE no action ON UPDATE no action;