"use client"


import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Filter({towns, districts, provinces}:{towns: string[], districts: string[], provinces: string[]}) {

  const router = useRouter()

  return (
    <section className="w-full py-8">
      <div className="container grid gap-4 mx-auto md:gap-6 lg:grid-cols-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              Town
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Town</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {towns.map((town) => {
              if (town === null) return;
              return <DropdownMenuItem onClick={() => router.push(`/about/partners?town=${town.toLowerCase()}`)} key={town}>{town}</DropdownMenuItem>;
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              District
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a District</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {districts.map((district) => {
              if (district === null) return;
              return (
                <DropdownMenuItem
                  onClick={() =>
                    router.push(
                      `/about/partners?district=${district.toLowerCase()}`
                    )
                  }
                  key={district}
                >
                  {district}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="outline">
              Province
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Province</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {provinces.map((province) => {
              if (province === null) return;
              return (
                <DropdownMenuItem
                  onClick={() =>
                    router.push(
                      `/about/partners?province=${province.toLowerCase()}`
                    )
                  }
                  key={province}
                >
                  {province}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}


