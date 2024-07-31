import { Collection } from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants"
import { getUserImages } from "@/lib/actions/image.actions"
import { getUserById } from "@/lib/actions/user.actions"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const Home = async ({ searchParams }: SearchParamProps) => {
  const searchQuery = (searchParams?.query as string) || '';
  let page = Number(searchParams?.page) || 1;
  const clerkId = auth().userId;
  let userId = null;
  if (clerkId) {
    userId = await getUserById(clerkId);
    page = 1;
  }
  const images = await getUserImages({ searchQuery, userId, page })
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Snap Sage
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <SignedIn>
        <section className="sm:mt-12">
          <Collection
            images={images?.data}
            totalPages={images?.totalPages}
          />
          {images?.totalPages && images?.totalPages > 1 && (
            <Button
              type="button"
              className="submit-button capitalize"
              onClick={() => { redirect('/profile') }}
            />
          )
          }
        </section>
      </SignedIn>
      <SignedOut>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </SignedOut>
    </>
  )
}

export default Home