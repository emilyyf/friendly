CREATE TABLE "user" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"photo" varchar(255),
	"verified" boolean NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(255),
	"created_at" date NOT NULL,
	"updated_at" date NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
