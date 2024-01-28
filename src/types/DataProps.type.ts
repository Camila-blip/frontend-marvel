import { z } from "zod";

export type DataProps<T extends z.Schema<any>> = z.infer<T>;
