import { chunk } from "lodash";

const result = chunk([1, "a", 2, false, undefined, null, new Date()], 2); // type infer
