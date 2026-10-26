import { NextResponse } from "next/server";

export function hello() {
    return new NextResponse("Hello World!");
}