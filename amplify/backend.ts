import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { budget } from "./storage/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
});


backend.addOutput({
  storage: {
    aws_region: "ap-southeast-1",
    bucket_name: "budget-gosoft-545009836557"
  },
});