import { type SchemaTypeDefinition } from 'sanity'

import certificationType from './certificationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    certificationType
  ],
}
