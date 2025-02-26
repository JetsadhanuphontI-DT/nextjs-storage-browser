import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "budget-s3-storage",
  isDefault: true,
  access: (allow) => ({
    "budget/*": [allow.authenticated.to(["read", "write", "delete"])],
  }),
});

// export const budget = defineStorage({
//   name: 'budget-gosoft',
//   isDefault: true // identify your default storage bucket (required)
// });

// export const budget = defineStorage({
//   name: 'budget-gosoft-545009836557',
//   isDefault: true, // identify your default storage bucket (required)
//   access: (allow: any) => ({
//     '*': [allow.authenticated.to(['read', 'write', 'delete'])]
//   })
// });