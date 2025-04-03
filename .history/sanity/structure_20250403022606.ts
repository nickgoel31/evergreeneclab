import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Singleton: Company Information
      S.listItem()
        .title("Company Information")
        .child(
          S.document()
            .schemaType("companyInformation")
            .documentId("companyInfo") // Ensures only one document
        ),

      // Other collections (e.g., blog posts, products, etc.)
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "companyInformation"
      ),
    ]);
