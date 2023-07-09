CREATE TABLE "Member" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "game_id" integer,
  "name" varchar,
  "score" integer,
  "rank" integer,
  "created_at" timestamp
);

CREATE TABLE "User" (
  "id" integer PRIMARY KEY,
  "session_id" varchar,
  "created_at" timestamp
);

CREATE TABLE "Game" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "member_id" integer,
  "type" varchar,
  "num_subjects" integer,
  "created_at" timestamp
);

CREATE TABLE "Round" (
  "id" integer PRIMARY KEY,
  "category" varchar,
  "game_id" integer,
  "member_id" integer,
  "created_at" timestamp
);

CREATE TABLE "Subject" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "score" integer,
  "artwork" varchar,
  "description" varchar,
  "round_id" integer,
  "created_at" timestamp
);

CREATE TABLE "Guess" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "delta" integer,
  "value" integer,
  "member_id" integer,
  "subject_id" integer,
  "created_at" timestamp
);

ALTER TABLE "Member" ADD FOREIGN KEY ("id") REFERENCES "Game" ("member_id");

ALTER TABLE "Member" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Member" ADD FOREIGN KEY ("game_id") REFERENCES "Game" ("id");

ALTER TABLE "Round" ADD FOREIGN KEY ("game_id") REFERENCES "Game" ("id");

ALTER TABLE "Round" ADD FOREIGN KEY ("member_id") REFERENCES "Member" ("id");

ALTER TABLE "Subject" ADD FOREIGN KEY ("round_id") REFERENCES "Round" ("id");

ALTER TABLE "Guess" ADD FOREIGN KEY ("subject_id") REFERENCES "Subject" ("id");

ALTER TABLE "Guess" ADD FOREIGN KEY ("member_id") REFERENCES "Member" ("id");
