/*
 Navicat Premium Data Transfer

 Source Server         : clientes
 Source Server Type    : PostgreSQL
 Source Server Version : 140012 (140012)
 Source Host           : localhost:5433
 Source Catalog        : db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140012 (140012)
 File Encoding         : 65001

 Date: 18/08/2024 15:00:27
*/


-- ----------------------------
-- Sequence structure for migrations_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."migrations_id_seq";
CREATE SEQUENCE "public"."migrations_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS "public"."client";
CREATE TABLE "public"."client" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "document" int4 NOT NULL,
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "deletedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of client
-- ----------------------------

-- ----------------------------
-- Table structure for installment
-- ----------------------------
DROP TABLE IF EXISTS "public"."installment";
CREATE TABLE "public"."installment" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "amount" int4 NOT NULL,
  "dueDate" timestamp(6) NOT NULL,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "deletedAt" timestamp(6),
  "paymentId" uuid,
  "installmentStatusId" uuid
)
;

-- ----------------------------
-- Records of installment
-- ----------------------------

-- ----------------------------
-- Table structure for installment_status
-- ----------------------------
DROP TABLE IF EXISTS "public"."installment_status";
CREATE TABLE "public"."installment_status" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "deletedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of installment_status
-- ----------------------------

-- ----------------------------
-- Table structure for loan_status
-- ----------------------------
DROP TABLE IF EXISTS "public"."loan_status";
CREATE TABLE "public"."loan_status" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "deletedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of loan_status
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS "public"."migrations";
CREATE TABLE "public"."migrations" (
  "id" int4 NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
  "timestamp" int8 NOT NULL,
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of migrations
-- ----------------------------

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS "public"."payment";
CREATE TABLE "public"."payment" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "amount" int4 NOT NULL,
  "date" timestamp(6) NOT NULL,
  "createdAt" timestamp(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT now(),
  "deletedAt" timestamp(6),
  "clientId" uuid,
  "loanStatusId" uuid
)
;

-- ----------------------------
-- Records of payment
-- ----------------------------

-- ----------------------------
-- Function structure for uuid_generate_v1
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v1mc
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1mc"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1mc"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1mc'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v3
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v3"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v3"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v3'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v4
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v4"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v4"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v4'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v5
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v5"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v5"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v5'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_nil
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_nil"();
CREATE OR REPLACE FUNCTION "public"."uuid_nil"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_nil'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_dns
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_dns"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_dns"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_dns'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_oid
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_oid"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_oid"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_oid'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_url
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_url"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_url"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_url'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_x500
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_x500"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_x500"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_x500'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."migrations_id_seq"
OWNED BY "public"."migrations"."id";
SELECT setval('"public"."migrations_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table client
-- ----------------------------
ALTER TABLE "public"."client" ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table installment
-- ----------------------------
ALTER TABLE "public"."installment" ADD CONSTRAINT "PK_c79b5b68e8b6293a0210ce7dbda" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table installment_status
-- ----------------------------
ALTER TABLE "public"."installment_status" ADD CONSTRAINT "PK_f5159f9d11faa5b7100c09334f6" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table loan_status
-- ----------------------------
ALTER TABLE "public"."loan_status" ADD CONSTRAINT "PK_96fdd831fdc84793047c178f7f9" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table migrations
-- ----------------------------
ALTER TABLE "public"."migrations" ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table payment
-- ----------------------------
ALTER TABLE "public"."payment" ADD CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table installment
-- ----------------------------
ALTER TABLE "public"."installment" ADD CONSTRAINT "FK_35ae49400b95dc55d9f2293a008" FOREIGN KEY ("installmentStatusId") REFERENCES "public"."installment_status" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."installment" ADD CONSTRAINT "FK_3f6c2611f027957f96a4074e2b1" FOREIGN KEY ("paymentId") REFERENCES "public"."payment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table payment
-- ----------------------------
ALTER TABLE "public"."payment" ADD CONSTRAINT "FK_78ef72a98b52d2a530e9afc2591" FOREIGN KEY ("loanStatusId") REFERENCES "public"."loan_status" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."payment" ADD CONSTRAINT "FK_bbbabef6ffa9572acb68cb0f217" FOREIGN KEY ("clientId") REFERENCES "public"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
