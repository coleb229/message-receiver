'use server'

import MessageView from "@/components/custom/MessageView";
import { prisma } from "@/lib/prisma";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }

  const userEmail = session.user?.email;

  const data = await prisma.message.findMany();
  return (
    <div className="">
      {userEmail === 'cbrant229@gmail.com' ? <MessageView data={data} /> : "You are not authorized to view this page."}
    </div>
  );
}
