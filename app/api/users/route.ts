// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Supported GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({
    users: users,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
