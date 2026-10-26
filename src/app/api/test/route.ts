import { hello } from "@/controllers/test.controller";

export async function GET(){
    return hello();
}