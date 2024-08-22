-- CreateTable
CREATE TABLE "corporate_directory" (
    "id" SERIAL NOT NULL,
    "charge" VARCHAR NOT NULL,
    "extension" VARCHAR NOT NULL,
    "user_create" VARCHAR NOT NULL,
    "user_update" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_0fc8ec22e1b8830dcaffe4dc5cc" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "resumen" VARCHAR NOT NULL,
    "user_create" VARCHAR,
    "user_update" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "picture" VARCHAR,

    CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spaces_availables" (
    "id" SERIAL NOT NULL,
    "store" VARCHAR NOT NULL,
    "local" VARCHAR NOT NULL,
    "area_m2" VARCHAR NOT NULL,
    "sector" VARCHAR NOT NULL,
    "user_create" VARCHAR NOT NULL,
    "user_update" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_e3ecbdd242dfa1383f7955615ef" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_prices" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "presentation" VARCHAR NOT NULL,
    "marketOne" VARCHAR NOT NULL,
    "marketTwo" VARCHAR NOT NULL,
    "marketThree" VARCHAR NOT NULL,
    "kilogram" VARCHAR NOT NULL,
    "variation" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_create" VARCHAR NOT NULL,
    "user_update" VARCHAR NOT NULL,

    CONSTRAINT "PK_a84f974024b87f5786024619ab9" PRIMARY KEY ("id")
);
