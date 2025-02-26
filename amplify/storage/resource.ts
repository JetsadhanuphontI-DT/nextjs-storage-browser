import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage-browser-test",
  access: (allow: any) => ({
    'media-readwritedelete/*': [allow.authenticated.to(['read', 'write', 'delete'])],
    'media-readonly/*': [allow.authenticated.to(['read'])],
    'shared-folder-readwrite/*': [
      allow.authenticated.to(['read', 'write'])
    ],
    'protected-useronlyreadwritedelete/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private-useronlyreadwritedelete/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});

export const budget = defineStorage({
  name: 'budget-gosoft-545009836557',
  isDefault: true, // identify your default storage bucket (required)
  access: (allow: any) => ({
    '*': [allow.authenticated.to(['read', 'write', 'delete'])]
  })
});