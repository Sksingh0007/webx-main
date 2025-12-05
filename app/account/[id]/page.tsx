import prisma from "@/lib/prisma";
import AccountPage from "@/components/ui/Account/AccountPage";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return <p className="text-red-500 text-lg">User not found.</p>;
  }

  return (
    <div >
      <AccountPage user={user} />
    </div>
  );
}
