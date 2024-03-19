import ShowCase from "@/components/ShowCase";
import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog from "../../sanity-blogs/schemaTypes/blog";
import Link from "next/link";


async  function getData() {

  
  const   query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const   data  =  await  client.fetch(query);

  return  data;
}

export default  async function Home() {

  const  data : simpleCard[]  =  await  getData()


  return (

  
    <main>

      <div>
        <ShowCase/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">
       
       {

          data.map((post, idx) => (

            <Card className="">

              <Image className="rounded-tl-md rounded-tr-md" src={urlFor(post.titleImage).url()}  width={500} height={500}
              alt="image"/>

              <CardContent className="my-3 space-y-5">

                <h1 className="font-bold font-DM">{post.title}</h1>
                <p className="line-clamp-3 text-sm text-gray-500">{post.smallDescription}</p>


                <div className="">
                <Button asChild className="w-full mt-7">

<Link href={`/blog/${post.currentSlug}`}>

  Read More
</Link>
</Button>
</div>
              </CardContent>


            </Card>
          ))
       }


      </div>
    </main>
  );
}
