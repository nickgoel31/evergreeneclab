import { type SchemaTypeDefinition } from 'sanity'

import certificationType from './certificationType'
import clientType from './clientType'
import galleryImageType from './galleryImageType'
import companyInfoType from './companyInfoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    certificationType,
    clientType,
    galleryImageType,
    companyInfoType
  ],
}
