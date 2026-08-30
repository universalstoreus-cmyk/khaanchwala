import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "services_gallery_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "services_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "services_applications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "services_applications_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "services_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "services_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_services_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_gallery_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_services_v_version_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_services_v_version_applications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_applications_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_services_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "services" ADD COLUMN "cutaway_image_id" integer;
  ALTER TABLE "services" ADD COLUMN "cta_url" varchar;
  ALTER TABLE "services_locales" ADD COLUMN "cta_label" varchar DEFAULT 'Request a Quote';
  ALTER TABLE "_services_v" ADD COLUMN "version_cutaway_image_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN "version_cta_url" varchar;
  ALTER TABLE "_services_v_locales" ADD COLUMN "version_cta_label" varchar DEFAULT 'Request a Quote';
  ALTER TABLE "services_gallery" ADD CONSTRAINT "services_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_gallery" ADD CONSTRAINT "services_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_gallery_locales" ADD CONSTRAINT "services_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_features_locales" ADD CONSTRAINT "services_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_applications" ADD CONSTRAINT "services_applications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_applications_locales" ADD CONSTRAINT "services_applications_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_applications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_faqs" ADD CONSTRAINT "services_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_faqs_locales" ADD CONSTRAINT "services_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_gallery" ADD CONSTRAINT "_services_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_version_gallery" ADD CONSTRAINT "_services_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_gallery_locales" ADD CONSTRAINT "_services_v_version_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_version_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_features_locales" ADD CONSTRAINT "_services_v_version_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_version_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_applications" ADD CONSTRAINT "_services_v_version_applications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_applications_locales" ADD CONSTRAINT "_services_v_version_applications_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_version_applications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_faqs" ADD CONSTRAINT "_services_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_faqs_locales" ADD CONSTRAINT "_services_v_version_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_version_faqs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_gallery_order_idx" ON "services_gallery" USING btree ("_order");
  CREATE INDEX "services_gallery_parent_id_idx" ON "services_gallery" USING btree ("_parent_id");
  CREATE INDEX "services_gallery_image_idx" ON "services_gallery" USING btree ("image_id");
  CREATE UNIQUE INDEX "services_gallery_locales_locale_parent_id_unique" ON "services_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "services_features_locales_locale_parent_id_unique" ON "services_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_applications_order_idx" ON "services_applications" USING btree ("_order");
  CREATE INDEX "services_applications_parent_id_idx" ON "services_applications" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "services_applications_locales_locale_parent_id_unique" ON "services_applications_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_faqs_order_idx" ON "services_faqs" USING btree ("_order");
  CREATE INDEX "services_faqs_parent_id_idx" ON "services_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "services_faqs_locales_locale_parent_id_unique" ON "services_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_services_v_version_gallery_order_idx" ON "_services_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_services_v_version_gallery_parent_id_idx" ON "_services_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_gallery_image_idx" ON "_services_v_version_gallery" USING btree ("image_id");
  CREATE UNIQUE INDEX "_services_v_version_gallery_locales_locale_parent_id_unique" ON "_services_v_version_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_services_v_version_features_locales_locale_parent_id_unique" ON "_services_v_version_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_services_v_version_applications_order_idx" ON "_services_v_version_applications" USING btree ("_order");
  CREATE INDEX "_services_v_version_applications_parent_id_idx" ON "_services_v_version_applications" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_services_v_version_applications_locales_locale_parent_id_un" ON "_services_v_version_applications_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_services_v_version_faqs_order_idx" ON "_services_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_services_v_version_faqs_parent_id_idx" ON "_services_v_version_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_services_v_version_faqs_locales_locale_parent_id_unique" ON "_services_v_version_faqs_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "services" ADD CONSTRAINT "services_cutaway_image_id_media_id_fk" FOREIGN KEY ("cutaway_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_cutaway_image_id_media_id_fk" FOREIGN KEY ("version_cutaway_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "services_cutaway_image_idx" ON "services" USING btree ("cutaway_image_id");
  CREATE INDEX "_services_v_version_version_cutaway_image_idx" ON "_services_v" USING btree ("version_cutaway_image_id");
  ALTER TABLE "services_features" DROP COLUMN "title";
  ALTER TABLE "services_features" DROP COLUMN "description";
  ALTER TABLE "_services_v_version_features" DROP COLUMN "title";
  ALTER TABLE "_services_v_version_features" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_applications" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_applications_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_faqs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_applications" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_applications_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_faqs_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "services_gallery" CASCADE;
  DROP TABLE "services_gallery_locales" CASCADE;
  DROP TABLE "services_features_locales" CASCADE;
  DROP TABLE "services_applications" CASCADE;
  DROP TABLE "services_applications_locales" CASCADE;
  DROP TABLE "services_faqs" CASCADE;
  DROP TABLE "services_faqs_locales" CASCADE;
  DROP TABLE "_services_v_version_gallery" CASCADE;
  DROP TABLE "_services_v_version_gallery_locales" CASCADE;
  DROP TABLE "_services_v_version_features_locales" CASCADE;
  DROP TABLE "_services_v_version_applications" CASCADE;
  DROP TABLE "_services_v_version_applications_locales" CASCADE;
  DROP TABLE "_services_v_version_faqs" CASCADE;
  DROP TABLE "_services_v_version_faqs_locales" CASCADE;
  ALTER TABLE "services" DROP CONSTRAINT "services_cutaway_image_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_cutaway_image_id_media_id_fk";
  
  DROP INDEX "services_cutaway_image_idx";
  DROP INDEX "_services_v_version_version_cutaway_image_idx";
  ALTER TABLE "services_features" ADD COLUMN "title" varchar;
  ALTER TABLE "services_features" ADD COLUMN "description" varchar;
  ALTER TABLE "_services_v_version_features" ADD COLUMN "title" varchar;
  ALTER TABLE "_services_v_version_features" ADD COLUMN "description" varchar;
  ALTER TABLE "services" DROP COLUMN "cutaway_image_id";
  ALTER TABLE "services" DROP COLUMN "cta_url";
  ALTER TABLE "services_locales" DROP COLUMN "cta_label";
  ALTER TABLE "_services_v" DROP COLUMN "version_cutaway_image_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_url";
  ALTER TABLE "_services_v_locales" DROP COLUMN "version_cta_label";`)
}
